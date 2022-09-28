

//______________________________________________________________________________________________________________________________________________________________________
//                                                                            ACTIVIDAD EN CLASE                                                         




/*EJERCICIO DE LA PIRAMIDE CON SIGNOS +*/

for (let i = 1; i<=5; ++i) {
    let resultado = '';

    for (let j = 1; j<=i; ++j)
        resultado += '+'
console.log(resultado);
}




//______________________________________________________________________________________________________________________________________________________________________
/*                                                                          ACTIVIDAD EN CLASE                                                         FECHA:08/08/2022*/




/*EJERCICIOS DE CICLOS*/



/*PUNTO 2*/

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


/*PUNTO 4*/

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
/*                                                                          ACTIVIDAD DE MENU                                                          FECHA:16/08/2022*/




var menu = Math.trunc(Math.random() * (7 - 1) + 1);
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

    menu = Math.trunc(Math.random() * (7 - 1) + 1);
}
console.log(`opcion 6`)
console.log('El programa a terminado')


/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*                                                                          CLASE DE FUNCIONES                                                          FECHA:17/08/2022*/


/*                                                                                      PARTE 1                                                                        */

/*EJEMPLO DE FUNCION*/
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

    /*                                 PARTE 2                                                                                                                             */



/*EJERCICIO 1*/


/*Cree una funcion donde indique si un triangulo es equilatero, isoceles o escaleno*/

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



/*Ejercicio 2*/


/*Hacer la teoria de pitagoras*/

function pitagoras(c1,c2){
    return Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2));
}
console.log(pitagoras(6,10));



/*Ejercicio 3*/


/*Hacer 2 ejercicios de ciclos*/ 


/*Identificar si un numero es par o inpar*/

var i 
function pares(num){
        if ( i % num== 0){
            console.log('SU NUMERO ES PAR')
        } else {
            console.log('SU NUMERO ES IMPAR')
        }
}
pares(4)


/*IDENTIFICAR SI UN NUMERO ES PRIMO O NO*/

function primos (x) {
    if ((x%2==0) && (x%3==0) && (x%5==0) && (x%7==0)){
        console.log('SU NUMERO ES PRIMO');
    } else {
        console.log('SU NUMERO NO ES PRIMO');
    }
}
primos(55)


/*Hacer 2 ejercicios de condicionales*/


/*Escribir 3 numeros y identificar si los tres son iguales o distintos*/

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


/*Escribir 3 numeros e identificar cual es el numerO del medio*/

function medio(a,b,c){
    if (a<b && b>c){
        return `${medio} SU NUMERO DEL MEDIO ES`
    }
}
console.log(medio(3,2,3))


/*iNDICAR SI LA NOTA ES SUFICIENTE, INSUFICIENTE O PROMEDIO*/

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



/*                                                                                      PARTE 3                                                                        */



/*FUNCIONES FLECHADAS*/

const saludar=()=>{
    return 'HOLA MI SOACHA QUERIDA';
}
console.log(saludar());


/*FUNCION FLECHADA SIN PARAMETROS*/

const saludar2=()=> 'HOLA SOACHA QUERIDA';
console.log(saludar2());


/*FUNCION FLECHADA CON PARAMENTROS */

const saludar3=nombre=> `HOLA ${nombre} BIENVENIDO A SOACHA QUERIDO`;
console.log(saludar3('MIGUEL'));


/*FUNCION FLECHADA ANONIMA*/

const mifuncion=(c1,c2)=>Math.sqrt(Math.pow(c1,2)+Math.pow(c2,2));
console.log(mifuncion(6,10));


/*Ejercicio 3*/



/*HACER LOS EJERCICIOS DE CICLOS EN FORMA DE FUNCION FLECHA*/ 


/*IDENTIFICAR SI UN NUMERO ES PRIMO O NO*/

const primos=x=>{
    if ((x%2==0) && (x%3==0) && (x%5==0) && (x%7==0)){
        console.log('SU NO NUMERO ES PRIMO');
    } else {
        console.log('SU NUMERO ES PRIMO');
    }
}
primos(55)


/*Hacer 2 ejercicios de condicionales*/


/*Escribir 3 numeros y identificar si los tres son iguales o distintos*/

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


/*Escribir 3 numeros e identificar cual es el numerO del medio*/

const medio=(a,b,c)=>{
    if (a < b && b > c){
        console.log('EL VALOR DEL MEDIO ES')
    }
}
medio(3,2,3)


/*iNDICAR SI LA NOTA ES SUFICIENTE, INSUFICIENTE O PROMEDIO*/

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

___________________________________________________________________________________________________________________________
//Clase 23-08
//                                                  Objetos Literales

let persona = {
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

//___________________________________________________________________________________________________________________________
//clase 24-08

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
            this._vector[i]=Math.round(Math.random()*100)
            
        }
    }
    get vector(){
        return
    }
}

//1 escriba metodos para sumar promedio mayor menor}


//2 escriba una clase que represente un producto comercial debe tener constructor, get y un metodo para
//  calcular antes y despuess del iva


//3 leer paguina 149 - 161