class negocio {
    #Nit
    #Nombre
    #Ubicacion
    constructor(Nit=[],Nombre=[],Ubicacion=[]){
        this.#Nit=Nit;
        this.#Nombre=Nombre;
        this.#Ubicacion=Ubicacion;
    }

    get Nit (){
        return this.#Nit
    }

    get Nombre (){
        return this.#Nombre
    }

    get Ubicacion (){
        return this.#Ubicacion
    }

    set Nit(Nit){
        this.#Nit=this.Nit
    }

    set Nombre(Nombre){
        this.#Nombre=this.#Nombre
    }

    set Ubicacion(Ubicacion){
        this.#Ubicacion=this.#Ubicacion
    }

    agregar_persona(persona1){
        this.#Nit.push(persona1)
        this.#Nombre.push(persona1)
    }
}





module.exports=negocio;