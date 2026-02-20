var express = require('express');
var router = express.Router();
var novedadesmodel = require('../models/novedadesmodel');
var usuariosModel = require('../models/usuariosmodel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    try {
        var novedades = await novedadesmodel.getNovedades();

        novedades = novedades.map(novedad => {
            if (novedad.img_id) {
                const imagen = cloudinary.url(novedad.img_id, {
                    width: 400,
                    height: 300,
                    crop: 'fill'
                });
                return {
                    ...novedad,
                    imagen
                }
            } else {
                return {
                    ...novedad,
                    imagen: ''
                }
            }
        });

        res.json(novedades);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'No se pudieron obtener las novedades' });
    }
});


router.post('/login', async function (req, res, next) {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

        if (data != undefined) {
            res.json({ success: true, nombre: data.usuario });
        } else {
            res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
});


router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'contacto@recetascocteles.com.ar',
    subject: 'Contacto web',
    html: ` ${req.body.nombre} se contacto a traves de la web y quiere más informacion a este correo: ${req.body.email}. Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }); // cierra transp

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'
  });
});






module.exports = router;
