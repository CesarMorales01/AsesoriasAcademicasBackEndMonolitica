const mongoose = require("mongoose");

const etapaEsquema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final']
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

module.exports = mongoose.model('Etapa', etapaEsquema);