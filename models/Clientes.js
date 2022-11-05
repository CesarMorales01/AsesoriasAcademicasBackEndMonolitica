const mongoose = require("mongoose");

const clienteEsquema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: new Date()
  },
  fechaActualizacion: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Cliente', clienteEsquema);