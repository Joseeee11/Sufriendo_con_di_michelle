const express = require('express');
const equipoRouter = express.Router();

//DATOS
const {equipo} = require('../datosBD/info.js').infoMantenimiento;
equipoRouter.use(express.json());

//CONTROLADORES
const actualizarEquipo = require('../controladores/e.actualizar.js');
const borrarEquipo = require('../controladores/e.borrar.js');

//GET()
equipoRouter.get('/', (req, res, next) => {
    res.send(equipo);
});
equipoRouter.get('/:nombre', (req, res, next) => { 
    var resultado = equipo.filter(t => t.nombre === req.params.nombre);
    if(resultado.length === 0) {
        return res.status(404).send(`no hay equipos en este estado: ${req.params.nombre}`);
    }
    res.send(resultado);
});

//PUT()
equipoRouter.put('/:id', (req, res, next) => {
    actualizarEquipo.actualizar(req, res, next);
});

//DELETE()
equipoRouter.delete('/:id', (req, res, next) => {
    borrarEquipo.borrar(req, res, next);
});





module.exports = equipoRouter;