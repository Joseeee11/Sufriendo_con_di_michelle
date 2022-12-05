const {equipo} = require('../datosBD/info.js').infoMantenimiento;


class equipoFecha {
    ultimoMantenimiento(req) {
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

var fechaActualizada = new equipoFecha();
module.exports = fechaActualizada;