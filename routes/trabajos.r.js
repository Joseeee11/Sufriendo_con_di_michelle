const express = require('express');
const trabajoRouter = express.Router();

//DATOS
const BD = require('../datosBD/BD.json');
trabajoRouter.use(express.json());

const trabajo = BD.Mantenimiento
const equipo = BD.Equipo

//CONTROLADORES
const actualizarAmbos = require('../controladores/actualizar.c.js');
const borrarAmbos = require('../controladores/borrar.c.js');
const crearAmbos = require('../controladores/crear.c.js');

const actualizar = new actualizarAmbos();
const borrar = new borrarAmbos();
const crear = new crearAmbos();

//Todo esto gracias al cursito de nodejs y express, agradecida con estefany

//GET(). Para probar, usar los get del chinito
trabajoRouter.get('/', (req, res, next) => {
    res.send(trabajo);
});
    //Ver trabajos por estatus
trabajoRouter.get('/:Estatus', (req, res, next) => {
    const estatus = req.params.Estatus; //resumir nombre x"d
    var resultado = trabajo.filter(t => t.Estatus === estatus);
    if(resultado.length === 0) {
        return res.status(404).send(`no hay trabajos en este estado: ${estatus}`);
    }
    res.send(resultado);
});

//PUT(). Actualizar trabajos.
trabajoRouter.put('/:id', (req, res, next) => {
    actualizar.actuTrabajo(req, res, next, trabajo);
}); //funciona :D. Actualización: Sufriendo desde las una con estas pinchis clases y llamados a las clases, error y error hasta ahorita 4:11 a.m :"D

//DELETE()
trabajoRouter.delete('/:id', (req, res, next) => {
    borrar.borrarTrabajo(req, res, next, trabajo);
});

//POST()
trabajoRouter.post('/', (req, res, next) => {
    crear.crearTrabajo(req, res, next, trabajo, equipo, actualizar);
});

module.exports = trabajoRouter;