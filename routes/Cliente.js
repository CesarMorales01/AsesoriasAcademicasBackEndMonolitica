const express = require("express");
const { crearCliente, getClientes, updateClienteById } = require('../controllers/Cliente');
const router = express.Router();

// crear 
router.post("/", crearCliente );

// obtener todos 
router.get("/", getClientes );

// update 
router.put("/:id",  updateClienteById);

module.exports = router;