const negocio = require("./Negocio");

class producto extends negocio {
    #codigo
    #nombre
    #precio
    #categoria
    constructor(codigo,nombre,precio,categoria){
        this.#codigo=codigo
        this.#nombre=nombre
        this.#precio=precio
        this.#categoria=categoria
    }

    get codigo(){
        return this.#codigo
    }

    set codigo(codigo){
        this.#codigo=this.#codigo
    }
//------------------------
get nombre(){
    return this.#nombre
}

set nombre(nombre){
    this.#nombre=this.#nombre
}
//------------------------
get precio(){
    return this.#precio
}

set precio(precio){
    this.#precio=this.#precio
}
//------------------------
get categoria(){
    return this.#categoria
}
set categoria(categoria){
    this.#categoria=this.#categoria
}
}
module.exports=producto;
