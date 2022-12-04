class Equipos_get {
    constructor(req,res,next,Equipo_BD,buscar){
    this.req=req
    this.res=res
    this.next=next
    this.Equipo_BD=Equipo_BD
    this.buscar=buscar
    }
    Todos(req,res,next,Equipo){
        console.log(typeof Equipo)
        res.send(JSON.stringify(Equipo));
    }

    BuscarPorCualquiera(req,res,next,Equipo,buscar){
        const valor = req.params.valor
        const resultado = Equipo.filter(Encontrado => Encontrado[buscar] == valor)
        if (resultado.length === 0) {
        res.send(`No se logro encontrar ${valor}`)
        }else{
        res.send(resultado)
        }}
}
module.exports = Equipos_get