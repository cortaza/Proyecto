function FunMayusculas(a){
    return new Promise((resolve, reject)=>{
        if (true) {
        resolve();
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
        }  
    })
};

    
function FunMinusculas(a){
    return new Promise((resolve)=>{
        if (true) {
            resolve()
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
    setTimeout(() => {
        console.log('El texto en minuscula: ' + a.toLowerCase());
    }, 3000)
    setTimeout(() => {
        console.log('El numero de letras minuscula es de:','' + contar1)
    }, 5500);
        }, 11000);
    }
    })
};



async function Funciones(a) {
    const Palabras = await FunMinusculas(a);
    const Palabros = await FunMayusculas(a);
}

Funciones('lalALalalal')
