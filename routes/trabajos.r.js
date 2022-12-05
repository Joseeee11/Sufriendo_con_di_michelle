const express = require('express');
const trabajoRouter = express.Router();

//DATOS
const {trabajo} = require('../datosBD/info.js').infoMantenimiento;
trabajoRouter.use(express.json());

//CONTROLADORES
const actualizarTrabajo = require('../controladores/t.actualizar.js');
const borrarTrabajo = require('../controladores/t.borrar.js');
const crearTrabajo = require('../controladores/t.crear.js');



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
    actualizarTrabajo.actualizar(req,res,next);
}); //funciona :D. Actualización: Sufriendo desde las una con estas pinchis clases y llamados a las clases, error y error hasta ahorita 4:11 a.m :"D


//DELETE()
trabajoRouter.delete('/:id', (req, res, next) => {
    borrarTrabajo.borrar(req, res, next);
});

//POST(). Falta la actualización
trabajoRouter.post('/', (req, res, next) => {
    crearTrabajo.crear(req, res, next);
});


module.exports = trabajoRouter;