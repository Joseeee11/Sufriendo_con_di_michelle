const {equipo} = require('../datosBD/info.js').infoMantenimiento;

class borrarEquipo {
    borrar(req, res, next) {
        var i = equipo.findIndex(e => e.id == req.params.id);
        if (i >= 0) {
            equipo.splice(i, 1); //permite borrar uno o mas elementos de un array
        } else {
            return res.status(404).send(`No se encontró el equipo identificado con ${req.params.id}`);
        };
        res.send(equipo)
    };
};

var equipoB = new borrarEquipo();
module.exports = equipoB;