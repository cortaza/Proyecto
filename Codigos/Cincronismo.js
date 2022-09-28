//SETTIMEOUT Y DEMAS

function externa(){
    console.log('Funcion externa al setTimeOut')
}

const funcionExt=()=>{
    console.log('Funcion externa flecha')
}

setTimeout(()=>{
    console.log('Yo amo Soacha');},
    2000);

setTimeout(Function(
    console.log('Funcion clasica')
), 3000);

setTimeout(externa,5000);
setTimeout(funcionExt,8000);

setInterval(()=>{
    console.log('Se repite')
}, 3000);

let timerid = setInterval(() => console.log('Amo el sena'), 2000);

//Despues de 5 segundos para

setTimeout(() => {
    clearInterval(timerid);
    //console.log('stop')
}, 5000);

//Ejemplo

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, i*2000);
}

function receptora(callback,parametro){
    setTimeout(() => {
        callback();
        console.log('Dentro de la funcion receptora')
    }, 0);
}

function funcionArgumento(parametro){
    console.log(`${parametro} de la funcion argumento`)
}

receptora(funcionArgumento,100);

function traabajoArreglos(cb1,cb2,vec){
    vec=[]
    setTimeout(() => {
        console.log(vec)
    }, 1000);
    vec=cb1(vec);
    console.log(cb2(vec));
}

function llenandoArreglo(vec){
    for (let i = 0; i < 10; i++) {
        vec[i]=Math.round(Math.random()*100)
    }
    return vec;
}

function sumarArreglo(vec){
    let suma=0
    for (let i = 0; i < vec.length; i++) {
        suma+=vec[i];
    }
    return suma;
}

traabajoArreglos(llenandoArreglo,sumarArreglo);
//Escriba un programa que muestre un contador desde 1 hasta 10 donde cada numero se muestre cada 2 segundos.