const express = require("express");
const { crearEtapa, getEtapa, updateEtapaById } = require('../controllers/Etapa');
const router = express.Router();

// crear 
router.post("/", crearEtapa );

// obtener todos 
router.get("/", getEtapa );

// update 
router.put("/:id",  updateEtapaById);

module.exports = router;