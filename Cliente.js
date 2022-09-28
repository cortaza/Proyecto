const persona = require("./Persona");

class cliente extends persona{
    #Metodo_de_pago
    constructor(Nit,Nombre,Metodo_de_pago){
        super(Nit,Nombre)
        this.#Metodo_de_pago=Metodo_de_pago;
    }

    get Metodo_de_pago(){
        return this.#Metodo_de_pago
    }

    set Metodo_de_pago(Metodo_de_pago){
        this.#Metodo_de_pago=this.#Metodo_de_pago
    }

    mostrartodo2=()=>{
        console.log( this.#Metodo_de_pago)
    }
}
var p1=new cliente('efectivo')
p1.mostrartodo2()

module.exports=cliente;