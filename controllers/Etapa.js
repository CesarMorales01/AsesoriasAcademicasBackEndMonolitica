const { request, response } = require('express');
const EtapaModel = require('../models/Etapas');

const crearEtapa = async (req = request, res = response) => {
    try{
        const nombre=req.body.name
        const query = { name: nombre}; 
        const tipoBD = await EtapaModel.findOne(query);
        if(tipoBD){
            return res.status(400).json({msg: 'Ya existe cliente'});
        }
        const datos = {
            name: nombre,
            
        };
        const Etapa = new EtapaModel( datos )
        await Etapa.save();
        res.status(201).json(Etapa);
    }catch(e){
        return res.status(500).json({error: e});
    }
    
}

const getEtapa = async (req, res = response) => {
    try{
        const EtapaBD = await EtapaModel.find();
        res.json(EtapaBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

const updateEtapaById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const name = req.body.name;
        
        const EtapaBD = await EtapaModel.findOne({ _id: id });
    
        if(!EtapaBD){
            return res.status(404).json({
                msj: 'No existe estado'
            });
        }
        const data = {
            name: name,
            fechaCreacion: EtapaBD.fechaCreacion,
            fechaActualizacion: new Date()
        }
        const Etapa = await EtapaModel.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(Etapa);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}

module.exports = { crearEtapa, getEtapa, updateEtapaById }