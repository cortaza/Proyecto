const persona = require("./Persona");

class vendedor extends persona{
    #Nit
    #Nombre
    #Carnet
    #Codigo_empleado
    constructor(Nit,Nombre,Carnet,Codigo_empleado){
        this.#Nit=Nit;
        this.#Nombre=Nombre;
        this.#Carnet=Carnet;
        this.#Codigo_empleado=Codigo_empleado;
    }
    get Nit(){
        return this.#Nit
    }

    get Nombre(){
        return this.#Nombre
    }

    get Carnet(){
        return this.#Carnet
    }

    get Codigo_empleado(){
        return this.#Codigo_empleado
    }

    set Nit(Nit){
        this.#Nit=this.#Nit
    }

    set Nombre(Nombre){
        this.#Nombre=this.#Nombre
    }

    set Carnet(Carnet){
        this.#Carnet=this.#Carnet
    }

    set Codigo_empleado(Codigo_empleado){
        this.#Codigo_empleado=this.#Codigo_empleado
    }
}
module.exports=vendedor;