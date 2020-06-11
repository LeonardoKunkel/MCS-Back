//////////////////////////////////////////
/////////// Verificar token /////////////
/////////////////////////////////////////
const jwt = require('jsonwebtoken');

function verificarToken (req, res, next) {
    let token = req.get('Authorization'); // requerimos la autorización
    jwt.verify(token, process.env.SEED, (err, decoded) => { //se verifica en el seed
        if(err) {
            return res.json({
                err
            });
        }
        req.user = decoded // decoded: la codificación del token
        next(); // función para seguir adelante con lo que sea
    });
}

module.exports = {verificarToken};