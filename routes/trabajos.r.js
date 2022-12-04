const express = require('express');
const trabajoRouter = express.Router();

//DATOS
const {trabajo} = require('../datosBD/info.js').infoMantenimiento;
trabajoRouter.use(express.json());

//CONTROLADORES
const actualizarTrabajo = require('../controladores/t.actualizar.js');
const borrarTrabajo = require('../controladores/t.borrar.js');

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
//PUT(). Actualizar trabajos, recordemos que para actualizar en PUT, apesar de que se modifique una propiedad el cuerpo debe contener la entidad completa
trabajoRouter.put('/:id', (req, res, next) => {
    actualizarTrabajo.actualizar(req,res,next);
}); //funciona :D. Actualización: Sufriendo desde las una con estas pinchis clases y llamados a las clases, error y error hasta ahorita 4:11 a.m :"D

//PATCH(). Actualizar trabajos en propiedades específicas, sin necesidad de que el cuerpo de la solicitud contenga toda la entidad
trabajoRouter.patch('/:id', (req, res, next) => {
    var i = trabajo.findIndex(t => t.id == req.params.id);
    if (i >= 0) {
        var trabajoModificado = trabajo[i];
        Object.assign(trabajoModificado, req.body); //el metodo .assign permite que un objeto con propiedades y valores (req.body) modifique a un objeto original (trabajoModificado).
        //P.D: no sé si para esta actividad hay que trabajar con validaciones x"d
    } else {
        return res.status(404).send(`No se encuentra el trabajo ${req.params.id} que se desea modificar.`);
    }
    res.send(trabajo);
}); //funciona :D

//DELETE()
trabajoRouter.delete('/:id', (req, res, next) => {
    borrarTrabajo.borrar(req, res, next);
});

//POST(). muestra un array vacio :c ahora veo porque
trabajoRouter.post('/', (req, res, next) => {
    var nuevoTrabajo = req.body;
    trabajo.push(nuevoTrabajo);
    res.send(trabajo);
});






module.exports = trabajoRouter;