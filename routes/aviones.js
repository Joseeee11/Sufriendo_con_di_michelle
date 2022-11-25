var express = require('express');
var router = express.Router();

var aviones = [
  {
    "id": 1,
    "modelo": "luz",
    "marca": 'amity',
  },
  {
    "id": 2,
    "modelo":'macarena',
    "marca": 'xd',
  },
  {
    "id": 3,
    "modelo": 'chinito',
    "marca": 'galko',
  }
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(aviones);
});
router.get('/:id', function(req, res, next) {
  var locura = Object.values(aviones);
  var avion = {};
  for (let i = 0; i < locura.length; i++) {
    if (req.params.id = locura[i]) {
      avion = locura[i];
      i++
    }
    res.send(avion).status(404);  
  }



  // var avion = {};

  // for (let i = 0; i <= aviones.length; i++) {
  //   if (req.params.id = aviones[i]) {
  //     avion = aviones[i];
  //     i++
  //   }
  //   res.send(avion).status(404);  
  // }
});


module.exports = router;
