const express = rrequire('express'),
      personalModel = require('../models/personalModel'),
      router = express.Router();
      
router.get('/', (req, res) => {
    personalModel.find((err, personas) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'Error al traer a las personas',
                err
            });
        }
        res.status(200).json({
            personas
        });
    });
});

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
        apellido: body.apellido,
        apellidos: body.apellidos
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