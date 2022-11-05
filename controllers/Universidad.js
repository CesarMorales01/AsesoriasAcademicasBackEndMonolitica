const { request, response } = require('express');
const UniversidadModel = require('../models/Universidad');

const crearUniversidad = async (req = request, res = response) => {
    try{
        const nombre=req.body.name
        const direccion=req.body.adress
        const telefono=req.body.phone
        const query = { name: nombre}; 
        const tipoBD = await UniversidadModel.findOne(query);
        if(tipoBD){
            return res.status(400).json({msg: 'Ya existe cliente'});
        }
        const datos = {
            name: nombre,
            adress: direccion,
            phone: telefono
        };
        const Universidad = new UniversidadModel( datos )
        await Universidad.save();
        res.status(201).json(Universidad);
    }catch(e){
        return res.status(500).json({error: e});
    }
    
}

const getUniversidad = async (req, res = response) => {
    try{
        const UniveridadBD = await UniversidadModel.find();
        res.json(UniveridadBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

const updateUniversidadById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const name = req.body.name;
        const adress=req.body.adress
        const phone= req.body.phone
        const UniveridadBD = await UniversidadModel.findOne({ _id: id });
    
        if(!UniveridadBD){
            return res.status(404).json({
                msj: 'No existe estado'
            });
        }
        const data = {
            name: name,
            adress:adress,
            phone:phone,
            fechaCreacion: UniveridadBD.fechaCreacion,
            fechaActualizacion: new Date()
        }
        const universidad = await UniversidadModel.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(universidad);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}

module.exports = { crearUniversidad, getUniversidad, updateUniversidadById }