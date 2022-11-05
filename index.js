const express = require("express");
const {  mongoConn } = require('./db/MongoConection');
const cors = require('cors');
require("dotenv").config()
const tiposRoute = require("./routes/TipoProyecto");
const clientesRoute = require("./routes/Cliente");
const universidadRoute = require("./routes/Universidad");
const etapaRoute = require("./routes/Etapa");
const proyectoRoute = require("./routes/Proyecto");

// settings
const app = express();
app.use(cors());
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());

app.use('/api/tipos', tiposRoute);
app.use('/api/clientes', clientesRoute);
app.use('/api/universidad', universidadRoute);
app.use('/api/etapa', etapaRoute);
app.use('/api/proyecto', proyectoRoute);

// mongodb connection
const conn = mongoConn();

  // server listening
app.listen(port, () => console.log("Server listening to!!!", port));