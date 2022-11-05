const { request, response } = require('express');
const TipoModel = require('../models/TipoProyecto');

const crearTipo = async (req = request, res = response) => {
    try{
        const nombre=req.body.name
        const query = { name: nombre}; 
        const tipoBD = await TipoModel.findOne(query);
        if(tipoBD){
            return res.status(400).json({msg: 'Ya existe'});
        }
        const datos = {
            name: nombre
        };
        const tipo = new TipoModel( datos )
        await tipo.save();
        res.status(201).json(tipo);
    }catch(e){
        return res.status(500).json({error: e});
    }
    
}

const getTipos = async (req, res = response) => {
    try{
        const tipoBD = await TipoModel.find();
        res.json(tipoBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

const updateTipoById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const name = req.body.name;
        const tipoBD = await TipoModel.findOne({ _id: id });
    
        if(!tipoBD){
            return res.status(404).json({
                msj: 'No existe estado'
            });
        }
        const data = {
            name: name,
            fechaCreacion: tipoBD.fechaCreacion,
            fechaActualizacion: new Date()
        }
        const tipo = await TipoModel.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(tipo);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}

module.exports = { crearTipo, getTipos, updateTipoById }