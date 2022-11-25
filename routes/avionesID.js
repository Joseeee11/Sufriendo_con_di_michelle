var Aviones = require('../Prueba_avion')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {     // http://localhost:3000/avionesID/*ID DE LO QUE SE BUSCA*
    if(Aviones[req.params.id]){
        res.send(Aviones[req.params.id])
    }else {
        res.end('ESE AVION NO SE ENCUENTRA')
    }
    


//     res.send((req,res)=>{
        
//     })
//   res.send(Aviones);
});

module.exports = router;
