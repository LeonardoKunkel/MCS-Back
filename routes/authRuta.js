// Ruta para que cada vez que pida el ususario, me traiga el token
const express = require('express'),
      { verificarToken } = require('../server/middlewares/auth'),
      router = express();

router.get('/', [verificarToken], (req, res) => {
    return res.status(200).json({
        user: req.user
    });
});

module.exports = router;