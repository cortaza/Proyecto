//const carrito=require('./carrito');
const Cliente=require('./cliente');
const Empleado=require('./empleado');
const factura=require('./factura');
const inventarios=require('./inventarios');
const negocio=require('./negocio');
const pedidos=require('./pedidos');
const persona=require('./persona');
const producto=require('./producto');
const proveedores=require('./proveedores');
const vendedor=require('./vendedor');

let n1=new negocio(5214,'pepsi','carrera 9');
console.log(n1);
let p1=new persona(74875,'Miguel Perez');
n1.agregarCliente(p1);
console.log(n1);

//cdf.generarAprendiz();
//console.log(cdf.lista);