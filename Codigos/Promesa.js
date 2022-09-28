//EJERCICIO DE INTERNET

const promise = new Promise((resolve, reject) => {
   const number = Math.floor(Math.random() * 12);
        setTimeout(
            () => number > 4
                ? resolve(number)
                : reject(new Error('menor a 4')),
        2000
    );
});

promise
    .then(number => console.log(number))
    .catch(error => console.error(error));


//EJEMPLO DEL INSTRUCTOR//

function base(){
    return new Promise((resolve, reject)=>{
        console.log('Linea de codigo dentro de la función promesa')
        resolve();

    });
}

base()
    .then(()=>{
        console.log('En el .then');
    })

//  con settimeout  //

function base(){
    return new Promise((resolve, reject)=>{
        if(true){
            resolve();
        setTimeout(() => {
            console.log('Linea de codigo dentro de la función promesa')
        }, 2000);
    }else{
        reject()
    }
    });
}

base()
    .then(()=>{
        console.log('En el .then');
        return 'then1'
    })
    .then((dato)=>{
        console.log('tiene dos datos', dato)
    })
    .then(Auxiliar)
    .catch(Error=>console.log('........',Error))

    function Auxiliar(){
        console.log('Es un auxiliar')
    }

    function prueba(cb){
    cb()
}

prueba(()=>{

})

function externa(){

}