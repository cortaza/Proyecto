//EJEMPLO INSTRUCTOR
function Practica(a) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Esto funcionooooooo' + a);
        }, 2000);
    });
}

async function Cartel(a) {
    const Mota = await Practica(a);
    console.log(Mota);
}

Cartel(2);
Cartel(4);
Cartel(8);

//      ACTIVIDAD 1

let contador = 0;
function Parametro(a){
    return new Promise(resolve => {
        setTimeout(() => {
            contador++
            resolve(`x values ${a} contador:${contador}`);
        }, 2000);
    })
}

async function Funcion(a){
    console.log(`ready ${a} contador:${contador}`);
    const reso = await Parametro(a);
    console.log(reso);
}

for (let x = 0; x < 10; x++) {
    console.log(x);
}

//      ACTIVIDAD 2

function MyA (){
    return new Promise((resolve,reject)=>{
        if(true){
            var contar = 0
            resolve()
            for (let i = 0; i < 10; i++) {
                contar+=1 
        }
        } else {
        reject()
        }
    })
};

MyA()