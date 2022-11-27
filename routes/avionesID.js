const Aviones = require('../Prueba_avion')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {  
    const id = Number(req.params.id)  // http://localhost:3000/avionesID/*ID DE LO QUE SE BUSCA*
    const resultado = Aviones.filter(Encontrado => Encontrado.id === id)
    if (resultado.length === 0) {
        res.send(`No se logro encontrar ${id}`)
    }else{
    res.send(resultado)
    }
    

//     res.send((req,res)=>{
        
//     })
//   res.send(Aviones);
});

module.exports = router;
