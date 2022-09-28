const cliente = require("./Cliente")

//const negocio = require("./Negocio");
class persona {
    #Nit
    #Nombre
    constructor(Nit,Nombre){
        this.#Nit=Nit
        this.#Nombre=Nombre
    }

    get Nit(){
        return this.#Nit
    }

    get Nombre(){
        return this.#Nombre
    }

    set Nit(Nit){
        this.#Nit=this.#Nit
    }

    set Nombre(Nombre){
        this.#Nombre=this.#Nombre
    }

    mostrartodo=()=>{
        console.log( this.#Nit)
        console.log( this.#Nombre)
    }
}
var p1=new persona(1023,'Miguel')
p1.mostrartodo()

module.exports=persona;
/*
let emp1=new negocio(123,'pepsi',lista);
console.log('Recien creado', emp1)
let p1=new persona(213,'Miguel','52#')
emp1.agregar_persona(p1)
console.log(emp1.Nombre)
console.log(emp1.Nit)
console.log(emp1.Ubicacion)


//var persona=new persona(15632515,'Juak');
//console.log(persona);*/