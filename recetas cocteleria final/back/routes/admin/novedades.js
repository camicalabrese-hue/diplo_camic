var express = require('express');
var router = express.Router();
var novedadesmodel = require('../../models/novedadesmodel');

var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);



router.get('/', async function (req, res, next) {
    try {
        var novedades = await novedadesmodel.getNovedades();

        novedades = novedades.map(novedad => {
            if (novedad.img_id) {
                const imagen = cloudinary.image(novedad.img_id, {
                    width: 100,
                    height: 100,
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

        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre_usuario,
            novedades
        });
    } catch (error) {
        console.log(error);
        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre_usuario,
            error: true,
            message: 'No se pudo conectar con la base de datos'
        });
    }
});


router.get('/agregar', (req, res, next) => {

    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});


router.post('/agregar', async (req, res, next) => {

    var img_id = '';

    if (req.files && Object.keys(req.files).length > 0) {
        var imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
    }
    try {
        console.log(req.body)

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesmodel.insertNovedad({
                ...req.body,
                img_id
            });

            res.redirect('/admin/novedades')

        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la novedad'
        })
    }
});


router.get('/eliminar/:id', async function (req, res, next) {
    try {
        var id = req.params.id;
        var novedad = await novedadesmodel.getNovedadById(id);

        if (novedad.img_id) {
            await destroy(novedad.img_id);
        }

        await novedadesmodel.deleteNovedad(id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error);
        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre_usuario,
            error: true,
            message: 'No se pudo eliminar la novedad'
        });
    }
});


router.get('/editar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        var novedad = await novedadesmodel.getNovedadById(id);
        res.render('admin/editar', {
            layout: 'admin/layout',
            novedad
        });
    } catch (error) {
        console.log(error);
        res.redirect('/admin/novedades');
    }
});


router.post('/editar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {

            let img_id = req.body.img_original;
            let borrar_img_vieja = false;

            if (req.body.img_delete === "1") {
                img_id = null;
                borrar_img_vieja = true;
            } else {
                if (req.files && Object.keys(req.files).length > 0) {
                    var imagen = req.files.imagen;
                    img_id = (await uploader(imagen.tempFilePath)).public_id;
                    borrar_img_vieja = true;
                }
            }

            if (borrar_img_vieja && req.body.img_original) {
                await destroy(req.body.img_original);
            }

            await novedadesmodel.updateNovedad({ ...req.body, img_id }, id);
            res.redirect('/admin/novedades');
        } else {
            var novedad = await novedadesmodel.getNovedadById(id);
            res.render('admin/editar', {
                layout: 'admin/layout',
                novedad,
                error: true,
                message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/editar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo modificar la novedad'
        });
    }
});

module.exports = router;
