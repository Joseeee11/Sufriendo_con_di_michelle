var Equipo_BD = require('../Equipo_BD.json')
var express = require('express');
var router = express.Router();
const Buscar_equipo = require('../controladores/Buscar_equipo')

/* Controladores */
let resultado = new Buscar_equipo()

/* RUTAS */
router.get('/', function(req, res, next) {
  resultado.Todos(req,res,next,Equipo_BD)
});

// http://localhost:3000/avionesID/*ID DE LO QUE SE BUSCA*
router.get('/:id', function(req, res, next) {  
    resultado.BuscarPorID(req,res,next,Equipo_BD)
});


/*Exportar*/
module.exports = router;
