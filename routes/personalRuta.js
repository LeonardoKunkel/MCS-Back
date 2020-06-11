const express = require('express'),
      personalModel = require('../models/personalModel'),
      router = express.Router();
      
      router.get('/',(req, res) => {
        personalModel.find((err,newPersonal) =>{
            if (err) {
                res.status(400).json({
                    ok:false,
                    message: 'No se pudo traer las tiendas',
                    err
                })
            }
            res.status(200).json({
                newPersonal
            })
        })
    })

router.get('/:id', (req, res) => {
    let id = req.params.id;
    personalModel.findById(id, (err, personalEncontrado) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: `No se encontró el ID: ${id}`
            });
        }
        res.status(200).json({
            personalEncontrado
        });
    });
});

router.post('/create', (req, res) => {
    let body = req.body;
    let newPersonal = {
        nombre: body.nombre,
        apellidoPaterno: body.apellidoPaterno,
        apellidoMaterno: body.apellidoMaterno,
        nombreEmpresa: body.nombreEmpresa
    };
    
    personalModel.create(newPersonal, (err, personalCreado) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'Error al crear',
                err
            });
        }
        res.status(200).json({
            personalCreado
        });
    });
});

module.exports = router;