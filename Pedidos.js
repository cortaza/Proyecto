class pedidos extends negocio{
    #direccion
    #nombre_cliente
    #fecha_entrega
    constructor(direccion,nombre_cliente,fecha_entrega){
        this.#direccion=direccion;
        this.#nombre_cliente=nombre_cliente;
        this.#fecha_entrega=fecha_entrega;
    }
    get direccion(){
        return this.#direccion
    }
    get nombre_cliente(){
        return this.#nombre_cliente
    }
    get fecha_entrega(){
        return this.#fecha_entrega
    }
    set direccion(direccion){
        this.#direccion=this.#direccion
    }
    set nombre_cliente(nombre_cliente){
        this.#nombre_cliente=this.#nombre_cliente
    }
    set fecha_entrega(fecha_entrega){
        this.#fecha_entrega=this.#fecha_entrega
    }
}
var p1=new persona(1023,'Miguel')
p1.mostrartodo()


module.exports=pedidos;