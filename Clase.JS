//______________________________________________________________________________________________________________________________________________________________________
//FECHA:03/07/2022
//                                                                    ACTIVIDAD EN CLASE




//EJERCICIO DE LA PIRAMIDE CON SIGNOS + //

for (let i = 1; i<=5; ++i) {
    let resultado = '';

    for (let j = 1; j<=i; ++j)
        resultado += '+'
console.log(resultado);
}




//______________________________________________________________________________________________________________________________________________________________________
//FECHA:08/08/2022
//                                                                    ACTIVIDAD EN CLASE




//EJERCICIOS DE CICLOS//



//PUNTO 2//

var numeroPrimo = 10;
var esNumeroPrimo = true;

for (var i = 2; i < numeroPrimo/2; i++) {
    if (numeroPrimo % i === 0) {
        esNumeroPrimo = false;
    }
}

    if(esNumeroPrimo){
        console.log(' Si es un numero primo', numeroPrimo);
    } else {
        console.log(' No es un numero primo', numeroPrimo);
    }


//PUNTO 4//

var numero = 1000;
var sumadivisores = 0;
var cantidadperfectos = 0;

for(let i = 1; i <= numero; i+=1){
    for(let n = 1; n < i; n+=1){
        if(i % n === 0){
            sumadivisores += n;
        }
    }
    if(sumadivisores === i){
        console.log(i + 'es un numero perfecto')
        cantidadperfectos += 1;
    }
    sumadivisores = 0
}
console.log(' hay' + cantidadperfectos+ ' numeros perfectos')




//______________________________________________________________________________________________________________________________________________________________________
//FECHA:16/08/2022
//                                                                    ACTIVIDAD DEL MENU




var menu = Math.trunc(Math.random() / (7 - 1) + 1);
var array = ['blue','black','yellow','green']
console.log(`opcion ${menu}`)

while (menu != 6) {
    if (menu == 1) {
        console.log(`opcion 1`)
        array.push('cyan')
        console.log(array)
        

    } else if (menu == 2){
        console.log(`opcion 2`)
        array.pop()
        console.log(array)
        

    } else if (menu == 3){
        console.log(`opcion 3`)
        array.sort()
        console.log(array)
        

    } else if (menu == 4){
        console.log(`opcion 4`)
        array[0] = 'pink'
        array.splice(4,0,'orange','gray')
        console.log(array)
        

    } else if (menu == 5){
        console.log(`opcion 5`)
        buscar = array.indexOf('black')
        console.log(buscar)
        
    }

    menu = Math.trunc(Math.random() / (7 - 1) + 1);
}
console.log(`opcion 6`)
console.log('El programa a terminado')




//______________________________________________________________________________________________________________________________________________________________________
//FECHA:17/08/2022
//                                                                    CLASE DE FUNCIONES




//              PARTE 1             //


//EJEMPLO DE FUNCION//

function perfecto(num){
    let suma=0;
    for (let i = 1; i < num; i++) {
        if (num%1==0) {
            suma=suma+1;
        }
    }
    if (suma==num) {
        return `${num} ES PERFECTO`;
    }
    else{
        return `${num} NO ES PERFECTO`;
    }
    }
    console.log(perfecto(10))



//              PARTE 2             //


//      EJERCICIO 1      //



//CREE UNA FUNCION DONDE INDIQUE SI UN TRIANGULO ES EQUILATERO, ISOCELES O ESCALENO//

function triangulo(a,b,c){
    if (a!=b && b!=c && a!=c) {
        console.log('EL TRIANGULO ES UN ESCALENO');
    } else if (a==b && b==c && a==c) {
        console.log('EL TRIANGULO ES UN EQUILATERO');
    } else {
        console.log('EL TRIANGULO ES UN ISOSCELES');
    }
}
triangulo(3,1,3)



//      EJERCICIO 2     //



//HACER LA TEORIA DE PITAGORAS//

function pitagoras(c1,c2){
    return Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2));
}
console.log(pitagoras(6,10));



//      EJERCICIO 3     //



//HACER 2 EJERCICIOS DE CICLOS//


//IDENTIFICAR SI UN NUMERO ES PAR O IMPAR//

var i 
function pares(num){
        if ( i % num== 0){
            console.log('SU NUMERO ES PAR')
        } else {
            console.log('SU NUMERO ES IMPAR')
        }
}
pares(4)


//IDENTIFICAR SI UN NUMERO ES PRIMO O NO//

function primos (x) {
    if ((x%2==0) && (x%3==0) && (x%5==0) && (x%7==0)){
        console.log('SU NUMERO ES PRIMO');
    } else {
        console.log('SU NUMERO NO ES PRIMO');
    }
}
primos(55)


//HACER 2 EJERCICIOS DE LOS CONDICIONALES//


//ESCRIBIR 3 NUMEROS E IDENTIFICAR SI LOS TRES SON IGUALES O DISTINTOS//

function numeros(a,b,c){
    if (a!=b && b!=c && a!=c) {
        console.log('TODOS LOS NUMEROS SON DIFERENTES');
    } else if (a==b && b==c && a==c) {
        console.log('TODOS LOS NUMEROS SON IGUALES');
    } else if (a!=b && b!=c && a==c) {
        console.log('EL PRIMER Y ULTIMO NUMERO SON IGUALES');
    } else if (a==b && b!=c && a!=c) {
        console.log('EL PRIMER Y SEGUNDO NUMERO SON IGUALES');
    } else if (a!=b && b==c && c!=a) {
        console.log('EL SEGUNDO Y TERCER NUMERO SON IGULES')
    }
}
numeros(1,2,3)


//ESCRIBIR 3 NUMEROS E IDENTIFICAR CUAL ES EL NUMERO DEL MEDIO//

function medio(a,b,c){
    if (a<b && b>c){
        return `${medio} SU NUMERO DEL MEDIO ES`
    }
}
console.log(medio(3,2,3))


//iNDICAR SI LA NOTA ES SUFICIENTE, INSUFICIENTE O PROMEDIO//

function calificacion(a){
    if(a == 10){
        console.log('SU NOTA ES EXCELENTE');
    } else if (a >= 5){
        console.log('SU NOTA ES PROMEDIO');
    } else {
        console.log('SU NOTA ES INSUFICIENTE')
    }
}
calificacion(1)



//              PARTE 3             //



//FUNCIONES FLECHADAS//

const saludar=()=>{
    return 'HOLA MI SOACHA QUERIDA';
}
console.log(saludar());



//FUNCION FLECHADA SIN PARAMETROS//

const saludar2=()=> 'HOLA SOACHA QUERIDA';
console.log(saludar2());



//FUNCION FLECHADA CON PARAMENTROS//

const saludar3=nombre=> `HOLA ${nombre} BIENVENIDO A SOACHA QUERIDO`;
console.log(saludar3('MIGUEL'));



//FUNCION FLECHADA ANONIMA//

const mifuncion=(c1,c2)=>Math.sqrt(Math.pow(c1,2)+Math.pow(c2,2));
console.log(mifuncion(6,10));



//      Ejercicio 3     //



//HACER LOS EJERCICIOS DE CICLOS EN FORMA DE FUNCION FLECHA// 


//IDENTIFICAR SI UN NUMERO ES PRIMO O NO//

const primos=x=>{
    if ((x%2==0) && (x%3==0) && (x%5==0) && (x%7==0)){
        console.log('SU NO NUMERO ES PRIMO');
    } else {
        console.log('SU NUMERO ES PRIMO');
    }
}
primos(55)



//HACER 2 EJERCICIOS DE CONDICIONALES//


//ESCRIBIR 3 NUMEROS E IDENTIFICAR SI LOS TRES SON DISTINTOS O IGUALES//

const numeros=(a,b,c)=>{
    if (a!=b && b!=c && a!=c) {
        console.log('TODOS LOS NUMEROS SON DIFERENTES');
    } else if (a==b && b==c && a==c) {
        console.log('TODOS LOS NUMEROS SON IGUALES');
    } else if (a!=b && b!=c && a==c) {
        console.log('EL PRIMER Y ULTIMO NUMERO SON IGUALES');
    } else if (a==b && b!=c && a!=c) {
        console.log('EL PRIMER Y SEGUNDO NUMERO SON IGUALES');
    } else if (a!=b && b==c && c!=a) {
        console.log('EL SEGUNDO Y TERCER NUMERO SON IGULES')
    }
}
numeros(1,2,3)



//ESCRIBIR 3 NUMEROS E IDENTIFICAR CUAL ES EL NUMERO DEL MEDIO//

const medio=(a,b,c)=>{
    if (a < b && b > c){
        console.log('EL VALOR DEL MEDIO ES')
    }
}
medio(3,2,3)



//iNDICAR SI LA NOTA ES SUFICIENTE, INSUFICIENTE O PROMEDIO//

const calificacion=a=>{
    if(a == 10){
        console.log('SU NOTA ES EXCELENTE');
    } else if (a >= 5){
        console.log('SU NOTA ES PROMEDIO');
    } else {
        console.log('SU NOTA ES INSUFICIENTE')
    }
}
calificacion(10)




//______________________________________________________________________________________________________________________________________________________________________
//FECHA:23/08/2022
//                                                  OBJETOS LITERALES

/*let persona = {
    Nombre: "Miguel",
    Apellido: "Cortazar",
    trabaja: false,
    estudia: true,
    Edad: 17
};

persona.altura = "promedio";
//persona.Edad = 18;
delete persona.Edad;
persona.Calificacion = "normal";
console.log(persona);
*/




//______________________________________________________________________________________________________________________________________________________________________
//FECHA:24/08/2022
//                                                  CLASE DE ESTADO Y COMPORTAMIENTO




//Objetos estado y comportamiento 
//var x=12; //Las variables tradicionales
//solo tienen estado
class Animal{
    constructor(nombre){
        this.nombre=nombre;
        //console.log('se activo el constructor')
    }
    //camell case
    //getNomber(){
    //  returns this.nombre;
    //}
    set nombre(nombre){
        this._nombre=nombre;
    }
    mensaje(){
        console.log('soy un mensaje');
    }
}
var objeto1=new Animal('Conejo');
console.log(objeto1)
//objeto1.setNombre('Liebre')
objeto1.nombre='Conejo Domestico'
//console.log(objeto1.getNombre())
console.log(objeto1.nombre);
//console.log(typeof(objeto1))

class Numeros{
    constructor(vector){
        this.vector=vector;
    }
    LlenarVector(tam){
        for (let i = 0; i < tam; i++) {
            this._vector[i]=Math.round(Math.random()/100)
            
        }
    }
    get vector(){
        return
    }
}




//______________________________________________________________________________________________________________________________________________________________________
//FECHA:29/08/2022
//                                                              ACTIVIDAD EN CLASE




class persona{
    constructor(nombre,documento){
        this._nombre=nombre;
        this._documento=documento;
    }
    set nombre (nombre){
        this._nombre=nombre
    }
    set documento(documento){
    this._documento=documento;
} 

    get nombre(){
        return this._nombre;
    }

    get nombre(){
        return this._nombre;
    }
}


class aprendiz extends persona{
    constructor(nombre, documento,ficha){
        super(nombre,documento);
        this._ficha=ficha;
    }
    set ficha(ficha){
        this._ficha=ficha;
    }
    get ficha(){
        return this._ficha=this._ficha;
    }
    imprimirtodo(){
        console.log('El nombre de la Persona es:',ob1._nombre);
        console.log('El documento de la Persona es',ob1._documento);
        console.log('El nombre del Aprendiz es:',ob2._nombre);
        console.log('El documento del Aprendiz es:',ob2._documento);
        console.log('La ficha del Aprendiz es:',ob2._ficha);
    }
}
let ob1=new persona('Maria Gomez',12312);
let ob2=new aprendiz('Mike Gonzales', 1231231, 'ADSI');
console.log(ob1)
console.log(ob2)
ob1._nombre='laura';
console.log(ob1.nombre);
console.log(ob1)
ob2._nombre='manuel';
console.log(ob2.ficha);
console.log(ob2)
ob2.imprimirtodo();



//-------------------------------------------------
//                                      ACTIVIDAD 1




//              PARTE 1               //



class Publicacion{
    constructor(Titulo,Precio){
    this._Titulo=Titulo;
    this._Precio=Precio;
    }

    set Titulo(Titulo){
        this._Titulo=Titulo
    }

    get Titulo(){
        return this._Titulo= this._Titulo
    }

    get Titulo(){
        return this._Titulo= this._Titulo
    }

}

class Libro extends Publicacion{
    constructor(Titulo,Precio,NumPaguinas){
        super(Titulo,Precio);
        this._NumPaguinas=NumPaguinas;
    }

    set NumPaguinas(NumPaguinas){
        this._NumPaguinas=NumPaguinas
    }

    get NumPaguinas(){
        return this._NumPaguinas=this._NumPaguinas
    }

    get NumPaguinas(){
        return this._NumPaguinas=this._NumPaguinas
    }
}

class CD extends Publicacion{
    constructor(Titulo,Precio,NumPaguinas,TiempoRepro){
    super(Titulo,Precio);
    this._NumPaguinas=NumPaguinas;
    this._TiempoRepro=TiempoRepro;
    }

    set TiempoRepro(TiempoRepro){
        this._TiempoRepro=TiempoRepro
    }

    get TiempoRepro(){
        return this._TiempoRepro=this._TiempoRepro
    }

    get TiempoRepro(){
        return this._TiempoRepro=this._TiempoRepro
    }

    TotalResultado(){
        console.log('El Titulo del libro es:',ob3._Titulo);
        console.log('El Precio del libro es: ',ob3._Precio);
        console.log('El Titulo del 2° libro es:',ob4._Titulo);
        console.log('El Precio del 2° libro es:',ob4._Precio);
        console.log('El Numero de paginas del 2° libro es:',ob4._NumPaguinas);
        console.log('El Titulo del 3° libro es: ',ob5._Titulo);
        console.log('El Precio del 3° libro es: ',ob5._Precio);
        console.log('El Numero de las paguinas del 3° libro es: ',ob5._NumPaguinas);
        console.log('El Tiempo de reproduccion del 3° libro es: ',ob5._TiempoRepro);
    }
}

let ob3=new Publicacion ('El hijo del diablo',100000);
let ob4=new Libro ('Con el demonio dentro',200000,100);
let ob5=new CD ('Funkint',150000,60,15000);
ob5.TotalResultado();



//              PARTE 2             //



/*
Una agencia vendedora de autos desea un sistema computacional para administrar los datos de sus vehículos y clasificarlos por tipo. Todos los autos tienen los siguientes datos:
· Número de serie del motor.
· Marca.
· Año.
· Precio.
Los vehículos se clasifican en autos compactos, autos de lujo, camionetas y vagonetas. Para los autos y vagonetas, también es importante almacenar la cantidad de pasajeros; mientras que para las camionetas se debe controlar la capacidad de carga en kgs. y la cantidad de ejes y de rodadas. Modele este sistema con diagramas de clases en UML e instancie cada una de las clases, asignándole datos mediante sus respectivas propiedades. Agregue un constructor con parámetros a cada clase para inicializar sus datos e invoque el constructor de la clase base desde el constructor de cada clase derivada (no utilice constructores default).
Implemente la sobrescritura del método ToString() para mostrar los datos de cada tipo de auto.
NOTA: No se permiten componentes duplicados en las clases ni clases vacías (sin elementos).
*/

/*--------------------------AUTOS ---superclase--------------------------*/
class autos {
    constructor(nserie, marca, año, precio) {
            this._nserie = nserie;
            this._marca = marca;
            this._año = año;
            this._precio = precio;
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
        precio = this.precio
    }
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
    }
}

let car = new autos(3245, 'Renauld', '2004', 50000)


/*--------------------------AUTOS COMPACTOS---subclase--------------------------*/
class autos_compactos extends autos {
    constructor(nserie, marca, año, precio, cantidad_de_pasajeros) {
            super(nserie, marca, año, precio)
            this._cantidad_de_pasajeros = cantidad_de_pasajeros
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        //Cantidad de pasajeros
    get cpa() {
        return this._cantidad_de_pasajeros = this._cantidad_de_pasajeros;
    }
    set cpa(cpa) {
            cpa = this._cantidad_de_pasajeros
        }
        //Completo
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._cantidad_de_pasajeros = this._cantidad_de_pasajeros)
    }
}
let vehiculo1 = new autos_compactos(14526, 'Cherolet', '2019', 60000000, 4)


/*--------------------------AUTOS DE LUJO---subclase--------------------------*/

class autos_lujo extends autos {
    constructor(nserie, marca, año, precio, cantidad_de_pasajeros) {
            super(nserie, marca, año, precio)
            this._cantidad_de_pasajeros = cantidad_de_pasajeros
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        //Cantidad de pasajeros
    get cpa() {
        return this._cantidad_de_pasajeros = this._cantidad_de_pasajeros;
    }
    set cpa(cpa) {
            cpa = this._cantidad_de_pasajeros
        }
        //Completo
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._cantidad_de_pasajeros = this._cantidad_de_pasajeros)
    }
}

let vehicle1 = new autos_lujo(123456, 'LAamborjini', '2020', 100000000, 2)

/*--------------------------CAMIONETAS---subclase--------------------------*/

class camionetas extends autos {
    constructor(nserie, marca, año, precio, capacidad_carga, cantidad_ejes, cantidad_rodadas) {
            super(nserie, marca, año, precio)
            this._capacidad_carga = capacidad_carga;
            this._cantidad_ejes = cantidad_ejes;
            this._cantidad_rodadas = cantidad_rodadas
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        //Capacidad de carga
    get cc() {
        return this._capacidad_carga = this._capacidad_carga;
    }
    set cc(cc) {
            cc = this._capacidad_carga
        }
        //Capacidad de ejes
    get ce() {
        return this._capacidad_ejes = this._capacidad_ejes;
    }
    set ce(ce) {
            ce = this._capacidad_ejes
        }
        //Capacidad de rodadas
    get cr() {
        return this._cantidad_rodadas = this._cantidad_rodadas;
    }
    set cr(cr) {
            cr = this._cantidad_rodadas
        }
        //Completo
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._capacidad_carga = this._capacidad_carga)
        console.log(this._cantidad_ejes = this._cantidad_ejes)
        console.log(this._cantidad_rodadas = this._cantidad_rodadas)
    }
}

let camioneta1 = new camionetas(2563214, 'Toyota', '2022', 80000000, 1400, 'Cuatro', 1000)

/*--------------------------VAGONETAS---subclase--------------------------*/

class vagoneta extends autos {
    constructor(nserie, marca, año, precio, cantidad_de_pasajeros) {
            super(nserie, marca, año, precio)
            this._cantidad_de_pasajeros = cantidad_de_pasajeros
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        //Cantidad de pasajeros
    get cpa() {
        return this._cantidad_de_pasajeros = this._cantidad_de_pasajeros;
    }
    set cpa(cpa) {
            cpa = this._cantidad_de_pasajeros
        }
        //Completo
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._cantidad_de_pasajeros = this._cantidad_de_pasajeros)
    }
}

let vagone = new vagoneta(152365, 'Volkswagen', '1995', 20000000, 8)


/*---------------------------impresiones---------------------------
console.log('_______________________________________________________________________')
car.completo();
console.log('_______________________________________________________________________')
vehiculo1.completo();
console.log('_______________________________________________________________________')
vehicle1.completo();
console.log('_______________________________________________________________________')
camioneta1.completo();
console.log('_______________________________________________________________________')
vagone.completo();
console.log('_______________________________________________________________________')
*/


//______________________________________________________________________________________________________________________________________________________________________
//FECHA:29/08/2022  ------  FECHA:30/08/2022
//                                                          MISION/TAREA




//1 ESCRIBA METODOS PARA SUMAR MENOR Y MAYOR//



//METODOS PARA SUMAR CON FUNCION//
function sumar(a, b, c) {
    return a + b + c;
}
let Total = sumar(30, 50, 60)
console.log(Total);



//SUMAR UN ARRAY CON CICLO FOR//

const array = [1, 2, 3, 4];
let Sum = 0;

for (let i = 0; i < array.length; i++) {
    Sum += array[i];

}
console.log(Sum);



//SACAR EL PROMEDIO //

/*MISION: Escriba métodos para suma, promedio, mayor, menor. 

/*METODOS PARA SUMAR CON FUNCION*/
function sumar(la, le, li) {
    return la + le + li;
}
let total = sumar(30, 50, 60)
console.log(total);

/*SUMAR UN ARRAY CON CICLO FOR*/

const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];

}
console.log(sum);



/*SACAR EL PROMEDIO */

function Promedio(a) {
    var i = 0,
        sum = 0,
        ArrayLen = a.length;
    while (i < ArrayLen) {
        sum = sum + a[i++];
    }
    return sum / ArrayLen;
}
var a = [1, 9, 6, 3, 2];
var a = Promedio(a);
console.log(a);

/*SACAR EL MAXIMO CON UN ARREGLO*/
//NULL para quitar el infinito 

function Maximo(t) {
    v = []
    suma = 0
    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 100)
    }
    console.log(v)
    console.log(Math.max.apply(null, v))
}
Maximo(10)

/*SACAR EL MINIMO CON UN ARREGLO*/

function Minimo(t) {
    v = []
    suma1 = 0
    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 100)
    }
    console.log(v)
    console.log(Math.min.apply(null, v))
}
Minimo(10)

/*Escriba una clase que represente un producto comercial de cualquier área. Debe tener constructor, setters, getters y un método para calcular el valor despues de IVA*/

/*Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.*/

/*********************************** */
class carro {
    constructor(nombre, peso, color, precio) {
        this.nombre = nombre;
        this.peso = peso;
        this.color = color;
        this.precio = precio;
    }
    get iva() {
            return this._iva
        }
        // Setter
    set iva(iva) {
        let pv = this.precio * iva
        console.log('El iva es', pv)
        let total = this.precio + pv
        console.log('El precio total es', total)
    }
}

let carro1 = new carro("LOGAN", 3.4, "gris", 80000000)
console.log(carro)
carro1.iva = (0.19);



/*EJERCICIOS DEL LIBRO*/
//EJERCICIO 1
class persona {
    constructor(primernombre, apellido) {
        this.primernombre = primernombre;
        this.apellido = apellido;
    }
}

let pe = new persona('Miguel', 'Cortazar')
console.log('Hola ', pe.primernombre, pe.apellido, ' como esta')

let p1 = new persona('Sofia', 'Rodriguez')
console.log('Hola ', p1.primernombre, p1.apellido, ' como esta')

//EJECICIO 2

class persona {
    constructor(primernombre, apellido) {
        this.primernombre = primernombre;
        this.apellido = apellido;
        this.nombre = this.primernombre + ' ' + this.apellido
    }
}

let per = new persona('Miguel', 'Cortazar')
console.log(per.nombre)

let p2 = new persona('Sofia', 'Rodriguez')
console.log(p2.nombre)

//______________________________________________________________________________________________________________________________________________________________________
//31/