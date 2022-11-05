const express = require("express");
const { crearUniversidad, getUniversidad, updateUniversidadById } = require('../controllers/Universidad');
const router = express.Router();

// crear 
router.post("/", crearUniversidad );

// obtener todos 
router.get("/", getUniversidad );

// update 
router.put("/:id",  updateUniversidadById);

module.exports = router;