class crearAmbos {
    crearEquipo(req, res, next, equipo) {
        var existente = equipo.filter(e => e.id == req.body.id);
        if (existente.length === 0) {
            equipo.push(req.body);
        } else {
            return res.send(`ya existe un Equipo con este id: ${req.body.id}`);
        }
        res.send(equipo);
    };
    crearTrabajo(req, res, next, trabajo, equipo, actualizar) {
        var existente = trabajo.filter(t => t.id == req.body.id);
        if (existente.length === 0) {
            actualizar.ultimoMantenimiento(req, equipo);
            trabajo.push(req.body);
        } else {
            return res.send(`ya existe un trabajo con este id: ${req.body.id}`);
        }
        res.send(trabajo);
    }
}

module.exports = crearAmbos;