var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function (req, res, next) {
  res.render('admin/login', { //login.hbs
    layout: 'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    console.log('=== DEBUG LOGIN ===');
    console.log('Usuario recibido:', usuario);
    console.log('Password recibido:', password);

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    console.log('Resultado de la base de datos:', data);

    if (data != undefined) {
      console.log('Login exitoso, redirigiendo a novedades...');
      req.session.id_usuario = data.id;  // Guardar el id en la sesión
      req.session.nombre_usuario = data.usuario;  // Guardar el nombre en la sesión
      res.redirect('/admin/novedades');
    } else {
      console.log('Login fallido, usuario o contraseña incorrectos');
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log('Error en el login:', error);
  } // cierro catch
}); // cierro router.post



module.exports = router;