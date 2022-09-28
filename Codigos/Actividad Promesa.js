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
        } else { 
            reject();
        };  
    })
};

FunMayusculas('Esta prueba fue exitosa ya que si me funciono :3 a y un XD de paso')
            .then(()=>{
                console.log('Si funciona el primero :3 and XD');
                return 'Si funciona :3 and XD'
            })
            
function FunMinusculas(a){
    return new Promise((resolve, reject)=>{
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
            console.log('El texto normal: ' + a)
    setTimeout(() => {
        console.log('El texto en minuscula: ' + a.toLowerCase());
    }, 3000)
    setTimeout(() => {
        console.log('El numero de letras minuscula es de:','' + contar1)
    }, 5500);
        }, 11000);
        } else {
            reject()
        }
    })
};

FunMinusculas('Esta prueba fue exitosa ya que si me funciono :3 a y un XD de paso')
            .then(()=>{
                setTimeout(() => {
                    console.log('Si funciona el segundo :3 and XD');
                    return 'Si funciona el segunndo :3 and XD'
                }, 10000);
            })
            .catch(error => console.log(error));