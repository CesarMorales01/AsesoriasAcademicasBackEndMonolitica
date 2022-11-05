const express = require("express");
const { crearProyecto, getProyecto, updateProyectoById } = require('../controllers/Proyecto');
const router = express.Router();

// crear proyecto
router.post("/", crearProyecto );

// obtener todos los proyectos
// Servicio transalado para establecer microservicio
//router.get("/", getProyecto );

// update proyecto
router.put("/:id",  updateProyectoById);

module.exports = router;