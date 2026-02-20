var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    req.session.destroy(function (err) {
        if (err) {
            console.log('Error al cerrar sesión:', err);
        }
        res.redirect('/admin/login');
    });
});

module.exports = router;
