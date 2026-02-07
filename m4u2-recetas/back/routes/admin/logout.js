var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // Destruir la sesión
    req.session.destroy(function (err) {
        if (err) {
            console.log('Error al cerrar sesión:', err);
        }
        // Redirigir al login
        res.redirect('/admin/login');
    });
});

module.exports = router;
