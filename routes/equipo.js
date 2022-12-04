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
  console.log(Equipo_E);
  resultado.Todos(req,res,next,Equipo_E)
});

// http://localhost:3000/avionesID/*ID DE LO QUE SE BUSCA*

router.get('/BuscarNombre/:valor', function(req, res, next) {  
  const elemento = 'Nombre'
  resultado.BuscarPorCualquiera(req,res,next,Equipo_E,elemento)
});

router.get('/BuscarDescripcion/:valor', function(req, res, next) {  
  const elemento = 'Descripción'
  resultado.BuscarPorCualquiera(req,res,next,Equipo_E,elemento)
});

router.get('/BuscarSerial/:valor', function(req, res, next) {  
  const elemento = 'Serial'
  resultado.BuscarPorCualquiera(req,res,next,Equipo_E,elemento)
});

router.get('/BuscarFechaIM/:valor', function(req, res, next) {  
  const elemento = 'FechaInicialMarcha'
  resultado.BuscarPorCualquiera(req,res,next,Equipo_E,elemento)
});

router.get('/BuscarFechaUM/:valor', function(req, res, next) {  
  const elemento = 'UltimaPuestaMarcha'
  resultado.BuscarPorCualquiera(req,res,next,Equipo_E,elemento)
});

router.get('/BuscarUltimoMantenimiento/:valor', function(req, res, next) {  
  const elemento = 'UltimoMantenimiento'
  resultado.BuscarPorCualquiera(req,res,next,Equipo_E,elemento)
});

router.get('/BuscarIdM/:valor', function(req, res, next) {  
  const elemento = 'id_Mantenimiento'
  resultado.BuscarPorCualquiera(req,res,next,Equipo_E,elemento)
});


/*Exportar*/
module.exports = router;
