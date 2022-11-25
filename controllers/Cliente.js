const { request, response } = require('express');
const ClienteModel = require('../models/Clientes');

const crearCliente = async (req = request, res = response) => {
    try{
        console.log("host", process.env.PORT)
        const nombre=req.body.name
        const email=req.body.email
        const query = { email: email}; 
        const tipoBD = await ClienteModel.findOne(query);
        if(tipoBD){
            return res.status(400).json({msg: 'Ya existe cliente'});
        }
        const datos = {
            name: nombre,
            email: email
        };
        const cliente = new ClienteModel( datos )
        await cliente.save();
        res.status(201).json(cliente);
    }catch(e){
        return res.status(500).json({error: e});
    }
}

const getClientes = async (req, res = response) => {
    try{
        const clientesBD = await ClienteModel.find();
        res.json(clientesBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

const updateClienteById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const name = req.body.name;
        const email = req.body.email;
        const clienteBD = await ClienteModel.findOne({ _id: id });
    
        if(!clienteBD){
            return res.status(404).json({
                msj: 'No existe cliente'
            });
        }
        const data = {
            name: name,
            email: email,
            fechaCreacion: clienteBD.fechaCreacion,
            fechaActualizacion: new Date()
        }
        const cliente = await ClienteModel.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(cliente);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}

module.exports = { crearCliente, getClientes, updateClienteById }