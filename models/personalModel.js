const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Personal', personalSchema);