const express = require("express");
const { crearTipo, getTipos, updateTipoById } = require('../controllers/TipoProyecto');
const router = express.Router();

// crear tipo
router.post("/", crearTipo );

// obtener todos los tipos
router.get("/", getTipos );

// update tipo
router.put("/:id",  updateTipoById);

module.exports = router;