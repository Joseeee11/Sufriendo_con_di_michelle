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
    ultimoMantenimiento(req, res, next) {
        var nuevoTrabajo = req.body;
        var i = equipo.findIndex(e => e.id == req.body.idEquipo);
        if (i >= 0) {
            var equipoActualizado = equipo[i];
            equipoActualizado.fechaUltimaMantenimiento = req.body.fechaFinalMantenimiento
            console.log(equipoActualizado);
        } else {
            return console.log(`No se encuentra el equipo ${req.body.idEquipo} que se desea actualizar.`);
        }
        console.log(equipo);
    }
}

var equipoA = new actualizarEquipo();
module.exports = equipoA;