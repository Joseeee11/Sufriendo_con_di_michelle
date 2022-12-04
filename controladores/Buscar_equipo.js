class Equipos_get {
    constructor(req,res,next,Equipo_BD){
    this.req=req
    this.res=res
    this.next=next
    this.Equipo_BD=Equipo_BD
    }
    Todos(req,res,next,Equipo){
        console.log(typeof Equipo)
        res.send(JSON.stringify(Equipo));
    }
    BuscarPorID(req,res,next,Equipo){
        const id = Number(req.params.id)  
        const resultado = Equipo.filter(Encontrado => Encontrado.id_Mantenimiento === id)
        if (resultado.length === 0) {
        res.send(`No se logro encontrar ${id}`)
        }else{
        res.send(resultado)
        }
    }
}
module.exports = Equipos_get