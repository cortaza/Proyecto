//ACTIVIDAD REALIZAR UNA FUNCION GENERAL DONDE SE REALIZE DOS CALL BACK DE LOS CUALES UNO DEBE CONTAR LAS MAYUSCULAS Y EL OTRO LAS MINUSCULAS Y DEBE RECIBIR
//UNA CADENA DE TEXTO Y LA CADENA DE TEXTO TIENE QUE SER IMPRIMIDA TANTO EN MAYUSCULAS Y EN MINUSCULAS

function FunMayusculas(a){

    let contar = 0
    let Mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    setTimeout(() => {
        for (var i = 0; i < Mayusculas.length; i++) {
            for (var x = 0; x < a.length; x++) {
            if(a[x]==Mayusculas[i]){
            contar+=1;
                }
              }
            }
        console.log('El texto normal es: ' + a)
    setTimeout(() => {
        console.log('El texto en mayusculas es: ' + a.toUpperCase());
        }, 4000)
    setTimeout(() => {
        console.log('El numero de letras mayusculas es de:','' + contar)
        }, 6500);
    }, 2000);
};

function FunMinusculas(a){
    var contar1 = 0
    var Minusculas = "abcdefghijklmnopqrstuvwxyz"
    setTimeout(() => {
        for (var i = 0; i < Minusculas.length; i++) {
            for (var x = 0; x < a.length; x++) {
            if(a[x]==Minusculas[i]){
            contar1+=1;
                }
              }
            }
            console.log('El texto normal: ' + a)
    setTimeout(() => {
        console.log('El texto en minuscula: ' + a.toLowerCase());
    }, 3000)
    setTimeout(() => {
        console.log('El numero de letras minuscula es de:','' + contar1)
    }, 5500);
        }, 10000);
};


function FunGeneral(cb1,cb2,a){
    cb1(a)
    cb2(a)
};

FunGeneral(FunMayusculas,FunMinusculas,'Hola Soy Miguel Angel Y Soy Un Aprendiz Del Sena Y Mi Sede Es el CIDE Soacha');