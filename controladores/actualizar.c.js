class actualizarAmbos {
    actuTrabajo(req, res, next, trabajo) {
        var i = trabajo.findIndex(t => t.id == req.params.id);
        if (i >= 0) {
            var trabajoModificado = trabajo[i];
            console.log(trabajoModificado);
            Object.assign(trabajoModificado, req.body);
        } else {
            return res.status(404).send(`No se encuentra el trabajo ${req.params.id} que se desea modificar.`);
        }
        res.send(trabajo);
    };
    actuEquipo(req, res, next, equipo) {
        var i = equipo.findIndex(e => e.id == req.params.id);
        if (i >= 0) {
            var equipoModificado = equipo[i];
            Object.assign(equipoModificado, req.body);
        } else {
            return res.status(404).send(`No se encuentra el equipo ${req.params.id} que se desea modificar.`);
        }
        res.send(equipo);
    };
    ultimoMantenimiento(req, equipo) {
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

module.exports = actualizarAmbos;