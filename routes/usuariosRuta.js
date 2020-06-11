const express = require('express'),
      usuariosModel = require('../models/usuariosModel'),
      router = express();
      
router.get('/', (req, res) => {
    usuariosModel.find((err, usuarios) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudieron traer los usuarios',
                err
            });
        }
        res.status(200).json({
            usuarios
        });
    });
});

router.post('/create', (req, res) => {
    let body = req.body;
    let newUsuarios = {
        email: body.email,
        password: body.password,
        nombre: body.nombre,
        apellido: body.apellido,
        fecha: body.fecha
    };
    
    usuariosModel.create(newUsuarios, (err, usuarioCreado) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudo crear el usuario',
                err
            });
        }
        res.status(200).json({
            usuarioCreado
        });
    });
});

module.exports = router;