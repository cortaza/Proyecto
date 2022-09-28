const negocio = require("./Negocio");

class inventario extends negocio{
    #Cantidad_inicial
    #Cantidad_disponible
    constructor(Cantidad_inicial,Cantidad_disponible){
        this.#Cantidad_inicial=Cantidad_inicial;
        this.#Cantidad_disponible=Cantidad_disponible;
    }

    get Cantidad_inicial(){
        return this.#Cantidad_inicial
    }

    get Cantidad_disponible(){
        return this.#Cantidad_disponible
    }

    set Cantidad_inicial(Cantidad_inicial){
        this.#Cantidad_inicial=this.#Cantidad_inicial
    }

    set Cantidad_disponible(Cantidad_disponible){
        this.#Cantidad_disponible=this.#Cantidad_disponible
    }
}
module.exports=inventario;