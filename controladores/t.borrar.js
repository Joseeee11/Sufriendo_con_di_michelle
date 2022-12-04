const {trabajo} = require('../datosBD/info.js').infoMantenimiento;

class borrarTrabajo {
    borrar(req, res, next) {
        var i = trabajo.findIndex(t => t.id == req.params.id);
        if (i >= 0) {
            trabajo.splice(i, 1); //permite borrar uno o mas elementos de un array
        } else {
            return res.status(404).send(`No se encuentra el trabajo ${req.params.id} que se desea eliminar.`);
        }
        res.send(trabajo);
    }
};
var trabajoB = new borrarTrabajo();

module.exports = trabajoB;