const {equipo} = require('../datosBD/info.js').infoMantenimiento;

class actualizarEquipo {
    actualizar(req, res, next) {
        var i = equipo.findIndex(e => e.id == req.params.id);
        if (i >= 0) {
            equipo[i] = req.body;
        } else {
            return res.status(404).send(`No se encontró el equipo identificado con ${req.params.id}`);
        }
        res.send(equipo)
        console.log(typeof equipo)
    }
}

var equipoA = new actualizarEquipo();
module.exports = equipoA;