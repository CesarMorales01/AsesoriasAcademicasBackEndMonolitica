const { Schema, model } = require('mongoose');

const proyectoEsquema = Schema({
    number: {
        type: String,
        required: true,
        unique: true,       
    },
    title: {
        type: String,
        required: true,
        
    },
    startDate:{
        type: String,
        required: true,
    },

    deliveryDate:{
        type: String,
        required: true,
    },

    value:{
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
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref:'Cliente',
        required: false,
    },

    tipo: {
        type: Schema.Types.ObjectId,
        ref:'Tipo',
        required: true,
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref:'Universidad',
        required: true,
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref:'Etapa',
        required: true,
    }
});

module.exports = model('Proyecto', proyectoEsquema)