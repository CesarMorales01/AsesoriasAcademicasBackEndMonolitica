const { request, response } = require('express');
const proyectoModel = require('../models/Proyectos');

const crearProyecto = async (req = request, res = response) => {
    try{
        const titulo=req.body.title
        const query = { title: titulo }; 
        const proyectoBD = await proyectoModel.findOne(query);
        if(proyectoBD){
            return res.status(400).json({msg: 'El proyecto ya existe'});
        }
        const datos = req.body;
         // Se recibe un json con los id de cliente, etapa, tipo proyecto y universidad
        //que el modelo proyecto validará mediante el método Schema.Types.ObjectId
        const proyecto = new proyectoModel( datos )
        await proyecto.save();
        res.status(201).json(proyecto);
    }catch(e){
        return res.status(500).json({error: e});
    }
}

const getProyecto = async (req, res = response) => {
    try{
        const proyectoBD = await proyectoModel.find();
        res.json(proyectoBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

const updateProyectoById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const ProyectoBD = await proyectoModel.findOne({ _id: id });
    
        if(!ProyectoBD){
            return res.status(404).json({
                msj: 'El proyecto no existe'
            });
        }
        const datos = req.body;
        const Proyecto = await proyectoModel.findByIdAndUpdate(id, datos, {new : true});
        res.status(201).json(Proyecto);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}

module.exports = { crearProyecto, getProyecto, updateProyectoById }