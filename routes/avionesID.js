var Aviones = require('../Prueba_avion')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {  
    const id = req.params.id  // http://localhost:3000/avionesID/*ID DE LO QUE SE BUSCA*
    const resultado = Aviones.id.filter()

//     res.send((req,res)=>{
        
//     })
//   res.send(Aviones);
});

module.exports = router;
