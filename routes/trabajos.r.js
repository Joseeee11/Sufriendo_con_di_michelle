const express = require('express');
const trabajoRouter = express.Router();

//DATOS
const infoMantenimiento = require('../datosBD/BD.js');
trabajoRouter.use(express.json());

const trabajo = infoMantenimiento.trabajo
const equipo = infoMantenimiento.equipo

//CONTROLADORES
const actualizarAmbos = require('../controladores/actualizar.c.js');
const borrarAmbos = require('../controladores/borrar.c.js');
const crearAmbos = require('../controladores/crear.c.js');

const actualizar = new actualizarAmbos();
const borrar = new borrarAmbos();
const crear = new crearAmbos();



//Todo esto gracias al cursito de nodejs y express, agradecida con estefany

//GET(). Para probar, usar los get del chinito
//Ver (conseguir) todos los trabajos
trabajoRouter.get('/', (req, res, next) => {
    res.send(trabajo);
});

//Ver trabajos por estatus
trabajoRouter.get('/:estatusMantenimiento', (req, res, next) => {
    const estatus = req.params.estatusMantenimiento; //resumir nombre x"d
    var resultado = trabajo.filter(t => t.estatusMantenimiento === estatus);
    if(resultado.length === 0) {
        return res.status(404).send(`no hay trabajos en este estado: ${estatus}`);
    }
    res.send(resultado);
});


//BASE PARA HACER LOS CONTROLADORES CON CLASES Y FUNCIONES
//PUT(). Actualizar trabajos.
trabajoRouter.put('/:id', (req, res, next) => {
    actualizar.actuTrabajo(req, res, next, trabajo);
}); //funciona :D. Actualización: Sufriendo desde las una con estas pinchis clases y llamados a las clases, error y error hasta ahorita 4:11 a.m :"D


//DELETE()
trabajoRouter.delete('/:id', (req, res, next) => {
    borrar.borrarTrabajo(req, res, next, trabajo);
});

//POST(). Falta la actualización
trabajoRouter.post('/', (req, res, next) => {
    crear.crearTrabajo(req, res, next, trabajo, equipo, actualizar);
});


module.exports = trabajoRouter;