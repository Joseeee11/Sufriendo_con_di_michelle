const express = require('express');
const equipoRouter = express.Router();

//DATOS
equipoRouter.use(express.json());
const infoMantenimiento = require('../datosBD/BD.js');
const equipo = infoMantenimiento.equipo;

//CONTROLADORES
const actualizarAmbos = require('../controladores/actualizar.c.js');
const borrarAmbos = require('../controladores/borrar.c.js');
const crearAmbos = require('../controladores/crear.c.js');

const actualizar = new actualizarAmbos();
const borrar = new borrarAmbos();
const crear = new crearAmbos();


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
    actualizar.actuEquipo(req, res, next, equipo);
});

//DELETE()
equipoRouter.delete('/:id', (req, res, next) => {
    borrar.borrarEquipo(req, res, next, equipo);
});

//POST(). No le he hecho el controlador
equipoRouter.post('/', (req, res, next) => {
    crear.crearEquipo(req, res, next, equipo);
});

module.exports = equipoRouter;