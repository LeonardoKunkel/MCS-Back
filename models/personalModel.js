const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellidoPaterno: {
        type: String,
        require: true
    },
    apellidoMaterno: {
        type: String,
        require: true
    },
    nombreEmpresa: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Personal', personalSchema);