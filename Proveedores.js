const persona = require("./Persona");

class proveedores extends persona{
    #Telefono
    #Correo
    constructor(Nit,Nombre,Telefono,Correo){
        super(Nit,Nombre);
        this.#Telefono=Telefono;
        this.#Correo=Correo;
    }

    get Telefono(){
        return this.#Telefono
    }

    get Correo(){
        return this.#Correo
    }

    set Telefono(Telefono){
        this.#Telefono=this.#Telefono
    }

    set Correo(Correo){
        this.#Correo=this.#Correo
    }
}
module.exports=proveedores;