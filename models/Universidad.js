const mongoose = require("mongoose");

const universidadEsquema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  phone: {
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

module.exports = mongoose.model('Universidad', universidadEsquema);