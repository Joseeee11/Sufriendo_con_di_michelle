var express = require('express');
var router = express.Router();
const infoAviones = require('./infoAviones.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(infoAviones);
});
//dimichele
router.get('/:id', function(req, res, next) {
  res.end(infoAviones[req.params.id]);
});
router.get('/porId/:id', function(req, res, next) {
  var avion = {};
  infoAviones.forEach(e => {
    if (req.params.id == e.id) {
      avion = e;
    };
  });
  res.end(avion);


  // if(infoAviones[req.params.id]){
  //   res.end(infoAviones[req.params.id]);
  // } else {
  //   res.end('404 xd')
  // }
});


module.exports = router;
