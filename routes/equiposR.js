const express = require('express');
const equipoRouter = express.Router();

const {equipo} = require('../datosBD/info.js').infoMantenimiento;

equipoRouter.use(express.json());




module.exports = equipoRouter;