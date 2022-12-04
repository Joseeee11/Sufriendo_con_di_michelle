const {trabajo} = require('../datosBD/info.js').infoMantenimiento;

class actualizarTrabajo {
    actualizar(req, res, next) {
        var i = trabajo.findIndex(t => t.id == req.params.id);
        if (i >= 0) {
            var trabajoModificado = trabajo[i];
            Object.assign(trabajoModificado, req.body); //el metodo .assign permite que un objeto con propiedades y valores (req.body) modifique a un objeto original (trabajoModificado).
            //P.D: no sé si para esta actividad hay que trabajar con validaciones x"d
        } else {
            return res.status(404).send(`No se encuentra el trabajo ${req.params.id} que se desea modificar.`);
        }
        res.send(trabajo);
    }
}
var trabajoA = new actualizarTrabajo();

module.exports = trabajoA;