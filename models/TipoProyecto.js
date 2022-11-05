const mongoose = require("mongoose");

const tipoProyectoEsquema = mongoose.Schema({
  name: {
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

module.exports = mongoose.model('Tipo', tipoProyectoEsquema);