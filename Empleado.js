const persona = require("./Persona");

class empleado extends persona {
    #carnet
    #codigo_empleado
    constructor(Nit,Nombre,carnet,codigo_empleado){
        super(Nit,Nombre)
        this.#carnet=carnet;
        this.#codigo_empleado=codigo_empleado
    }

    get carnet(){
        return this.#carnet
    }

    get codigo_empleado(){
        return this.#codigo_empleado
    }

    set carnet(carnet){
        this.#carnet=this.#carnet
    }
    
    set codigo_empleado(codigo_empleado){
        this.#codigo_empleado=this.#codigo_empleado
    }
}
module.exports=empleado;