const {equipo} = require('../datosBD/info.js').infoMantenimiento;

class actualizarEquipo {
    actualizar(req, res, next) {
        var i = equipo.findIndex(e => e.id == req.params.id);
        if (i >= 0) {
            var equipoModificado = equipo[i];
            Object.assign(equipoModificado, req.body);
        } else {
            return res.status(404).send(`No se encuentra el equipo ${req.params.id} que se desea modificar.`);
        }
        res.send(equipo);
    }
}

var equipoA = new actualizarEquipo();
module.exports = equipoA;