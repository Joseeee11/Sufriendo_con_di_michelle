const {equipo} = require('../datosBD/info.js').infoMantenimiento;

class crearEquipo {
    crear(req, res, next) {
        var nuevoEquipo = req.body;
        var existente = equipo.filter(t => t.id == nuevoEquipo.id);
        if (existente.length === 0) {
            equipo.push(nuevoEquipo);
        } else {
            return res.send(`ya existe un Equipo con este id: ${nuevoEquipo.id}`);
        }
        res.send(equipo);
    }
}

var equipoC = new crearEquipo();
module.exports = equipoC;