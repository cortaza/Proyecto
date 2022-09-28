//generar un numero de la poblacion entre 1000 and 10000
//calculo de 20 años del crecimiento de la poblacion
//Crear la funcion de crecimiento de la poblacion

    let P = Math.round(Math.random()*(10000 - 1000) + 1000);
    for (let contar = 0; contar < 20; contar++) {
        setTimeout(() => {
            N = Math.round(((Math.random()*(10 - 1) + 1)/100)*P);
            M = Math.round(((Math.random()*(3 - 1) + 1)/100)*P);
            R = (N-M/P);
                console.log('El año es: ' + contar);
                console.log('El numero de poblacion actual es: ' + R);
                console.log('La tasa de nacimientos es: ' + N);
                console.log(`La tasa de muertes es de: ${M}\n---------------------`);
        }, contar*3000);
    }
    
    function Casas (){
        N = Math.round(((Math.random()*(10 - 1) + 1)/100)*P);
         return new Promise((resolve=>{
             if (true){
                 setTimeout(() => {
                     resolve(N)
                 }, 4000);
            }
         }));
    }

    function Crecimiento(){
        N = Math.round(((Math.random()*(10 - 1) + 1)/100)*P);
        M = Math.round(((Math.random()*(3 - 1) + 1)/100)*P);
        R = (N-M/P);
        setTimeout(() => {
            
        }, 2000);
    }

    async function PC (){
        let J = await Casas();
        let k = await Crecimiento();
        console.log('La poblacion que tiene casas del ultimo año es: ' + J)
        console.log('La poblacion a aumentado un: ' + k);
    }

    PC()