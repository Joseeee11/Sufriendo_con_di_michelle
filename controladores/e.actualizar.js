const {equipo} = require('../datosBD/info.js').infoMantenimiento;

class actualizarEquipo {
    actualizar(req, res, next) {
        // var i = equipo.findIndex(e => e.id == req.params.id);
        // if (i >= 0) {
        //     equipo[i] = req.body;
        // } else {
        //     return res.status(404).send(`No se encontró el equipo identificado con ${req.params.id}`);
        // }
        // res.send(equipo)
        // console.log(typeof equipo)

        var i = equipo.findIndex(t => t.id == req.params.id);
        if (i >= 0) {
            var equipoModificado = equipo[i];
            Object.assign(equipoModificado, req.body); //el metodo .assign permite que un objeto con propiedades y valores (req.body) modifique a un objeto original (equipoModificado).
            //P.D: no sé si para esta actividad hay que trabajar con validaciones x"d
        } else {
            return res.status(404).send(`No se encuentra el equipo ${req.params.id} que se desea modificar.`);
        }
        res.send(equipo);
    }
}

var equipoA = new actualizarEquipo();
module.exports = equipoA;