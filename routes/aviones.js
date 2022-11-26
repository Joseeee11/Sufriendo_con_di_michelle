var Aviones = require('../Prueba_avion')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(typeof Aviones)
  res.send(Aviones);
  
});

module.exports = router;
