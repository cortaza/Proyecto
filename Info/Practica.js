var Nombre = 'Miguel';
console.log(Nombre);

var Apellido = 'Cortazar';
console.log(Apellido);

var Edad = 17;
console.log(Edad);

var yearActual = 2022;
console.log(yearActual);

yearMiguel = yearActual - Edad;

console.log('La edad actual de Miguel es ' + Edad);
console.log('La fecha de nacimiento de Miguel fue el ' + yearMiguel);

if (Edad < 12){
    console.log(Nombre + ' es un niño.');
} else if ((Edad > 11) && (Edad < 18)){
    console.log(Nombre + ' es un adolecente.');
} else if ((Edad > 17) && (Edad < 60)){
    console.log(Nombre + ' es un adulto.')
} else {
    console.log(Nombre + ' es un anciano.')
}

//Ya quisieras tu tener este sueldo estudiando papu
var sueldo = 1000000;
console.log('Gana mensual mente el minimo osea ' + sueldo)

//No mames wey quiero una pareja
var TienePareja = false;

if (TienePareja == true){
    console.log(Nombre + ' si tiene pareja el wey, que orgullo.');
} else {
    console.log(Nombre + ' no wey este men esta mas solo que un desierto.')
}
