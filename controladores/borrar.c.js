class borrarAmbos {
    borrarEquipo(req, res, next, equipo) {
        var i = equipo.findIndex(e => e.id == req.params.id);
        if (i >= 0) {
            equipo.splice(i, 1); //permite borrar uno o mas elementos de un array
        } else {
            return res.status(404).send(`No se encontró el equipo identificado con ${req.params.id}`);
        };
        res.send(equipo)
    };
    borrarTrabajo(req, res, next, trabajo) {
        var i = trabajo.findIndex(t => t.id == req.params.id);
        if (i >= 0) {
            trabajo.splice(i, 1);
        } else {
            return res.status(404).send(`No se encuentra el trabajo ${req.params.id} que se desea eliminar.`);
        }
        res.send(trabajo);
    }
};

module.exports = borrarAmbos;