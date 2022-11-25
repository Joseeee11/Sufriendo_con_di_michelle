let Aviones = [{
  Marca:'chini',
  ID:1,
  Pais:'china',
  Modelo:'8DGC'
}]



var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(Aviones);
});

module.exports = router;
