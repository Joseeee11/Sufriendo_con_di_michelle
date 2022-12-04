const {trabajo} = require('../datosBD/info.js').infoMantenimiento;

class actualizarTrabajo {
    actualizar(req, res, next) {
        //es necesario el id, para saber que trabajo en especifico se modificará. El (.findIndex) nos permite econtrar el indice de un elemento en un arreglo; así el conteo desde 0 de un arreglo no nos afectara en la comparación
        var i = trabajo.findIndex(t => t.id == req.params.id);
        if (i >= 0) { //si  t.id == req.params.id da false, i retornara -1
            trabajo[i] = req.body;
        } else {
            return res.status(404).send(`No se encuentra el trabajo ${req.params.id} que se desea modificar.`);
        }
        res.send(trabajo);
        console.log(trabajo);
    }
}
var trabajoA = new actualizarTrabajo();

module.exports = trabajoA;