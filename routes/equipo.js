var Equipo_BD = require('../Equipo_BD.json')
var express = require('express');
var router = express.Router();
const Buscar_equipo = require('../controladores/Buscar_equipo')
var Equipo_E = Equipo_BD.Equipo
var Equipo_M = Equipo_BD.Mantenimiento
/* Controladores */
let resultado = new Buscar_equipo()

/* RUTAS */
router.get('/', function(req, res, next) {
  resultado.Todos(req,res,next,Equipo_E)
});

// http://localhost:3000/avionesID/*ID DE LO QUE SE BUSCA*
router.get('/:id', function(req, res, next) {  
    resultado.BuscarPorID(req,res,next,Equipo_E)
});


/*Exportar*/
module.exports = router;
