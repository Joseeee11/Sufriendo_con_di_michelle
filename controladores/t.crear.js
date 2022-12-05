const {trabajo} = require('../datosBD/info.js').infoMantenimiento;
const equipoFecha = require('../controladores/e.actualizarFecha.js');

class crearTrabajo {
    crear(req, res, next) {
        var existente = trabajo.filter(t => t.id == req.body.id);
        if (existente.length === 0) {
            equipoFecha.ultimoMantenimiento(req);
            var nuevoTrabajo = req.body;
            trabajo.push(nuevoTrabajo);
        } else {
            return res.send(`ya existe un trabajo con este id: ${req.body.id}`);
        }
        res.send(trabajo);
    }




    // crear(req, res, next) {
    //     var nuevoTrabajo = req.body;
    //     var existente = trabajo.filter(t => t.id == nuevoTrabajo.id);
    //     if (existente.length === 0) {
    //         trabajo.push(nuevoTrabajo);
    //     } else {
    //         return res.send(`ya existe un trabajo con este id: ${nuevoTrabajo.id}`);
    //     }
    //     res.send(trabajo);
    // }
}

var trabajoC = new crearTrabajo();
module.exports = trabajoC;