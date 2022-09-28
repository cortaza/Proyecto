const cliente = require("./Cliente")

class factura extends cliente{
    #nombre_cliente
    #nit_cliente
    #fecha_de_cancelacion
    #direccion_cliente
    #metodo_de_pago
    #codigo_factura
    #cantidad_productos
    #valor_total
    constructor(nombre_cliente,nit_cliente,fecha_de_cancelacion,direccion_cliente,metodo_de_pago,codigo_factura,cantidad_productos,valor_total){
    this.#nombre_cliente=nombre_cliente
    this.#nit_cliente=nit_cliente
    this.#fecha_de_cancelacion=fecha_de_cancelacion
    this.#direccion_cliente=direccion_cliente
    this.#metodo_de_pago=metodo_de_pago
    this.#codigo_factura=codigo_factura
    this.#cantidad_productos=cantidad_productos
    this.#valor_total=valor_total
}
get nombre_cliente(){
    return this.#nombre_cliente
}

get nit_cliente(){
    return this.#nit_cliente
}

get fecha_de_cancelacion(){
    return this.#fecha_de_cancelacion
}
get direccion_cliente(){
    return this.#direccion_cliente
}
get metodo_de_pago(){
    return this.#metodo_de_pago
}

get codigo_factura(){
    return this.#codigo_factura
}

get cantidad_productos(){
    return this.#cantidad_productos
}
get valor_total(){
    return this.#valor_total
}
set nombre_cliente(nombre_cliente){
    this.#nombre_cliente=this.#nombre_cliente
}
set nit_cliente(nit_cliente){
    this.#nit_cliente=this.#nit_cliente
}
set fecha_de_cancelacion(fecha_de_cancelacion){
    this.#fecha_de_cancelacion=this.#fecha_de_cancelacion
}
set direccion_cliente(direccion_cliente){
    this.#direccion_cliente=this.#direccion_cliente
}
set metodo_de_pago(metodo_de_pago){
        this.#metodo_de_pago=this.#metodo_de_pago
    }
set codigo_factura(codigo_factura){
        this.#codigo_factura=this.#codigo_factura
    }
set cantidad_productos(cantidad_productos){
        this.#cantidad_productos=this.#cantidad_productos
    }
set valor_total(valor_total){
        this.#valor_total=this.#valor_total
    }
}
module.exports=factura;