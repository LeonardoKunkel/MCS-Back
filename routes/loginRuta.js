const express = require('express'),
      usuarioModel = require('../models/usuariosModel'),
      jwt = require('jsonwebtoken'),
      router = express();
      
router.post('/', (req, res) => {
    let body = req.body;
    usuarioModel.findOne({email: body.email}, (err, usuarioEncontrado) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }
        if (!usuarioEncontrado) {
            return res.status(400).json({
               message: 'El usuario es incorrecto, no sea imbécil' 
            });
        }
        if (usuarioEncontrado.password != body.password) {
            return res.status(400).json({
                message: 'La contraseña es incorrecta'
            });
        }
        
        let token = jwt.sign({
           user: usuarioEncontrado 
        }, process.env.SEED, {expiresIn: process.env.CADUCIDAD_TOKEN});
        res.status(200).json({
            token
        });
    });
});

module.exports = router;