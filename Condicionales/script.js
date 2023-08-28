/*
//Ejercicio 1
let respuesta = window.prompt("¿Eres bellisimo?")

if(respuesta == "si"){
    alert("Ciertamente")
}else if(respuesta == "no"){
    alert("No te creo.")

}else{
    alert("no hemos entendido la respuesta")
}

//Ejercicio 2

var n1 = prompt ("Escriba un número")

if(n1 % 2 === 0){
    document.write(`${n1} es divisible entre 2`)
}else{
    document.write(`${n1} no es divisible entre 2`)
}

//Ejercicio 3

const numero = prompt("Ingrese número entero")

if (numero%2==0){
    alert("El número "+numero+" es par")
}
else{
    alert("El número "+numero+" es impar")
}

//Ejercicio 4
const n1 = prompt("Ingrese número de cliente")

if(n1 == 1000){
    alert("Ganaste un premio")
}else{
    alert(`${n1} Lo sentimos sigue participando`)
}

//Ejercicio 5
const n1 = parseInt(prompt("Ingrese primer número"))
const n2 = parseInt(prompt("Ingrese segundo número"))

if(n1 < n2){
    alert(`${n1} Es menor que ${n2}`)
}else if (n2 < n1){
    alert(`${n2} Es menor que ${n1}`)
}else{
    alert("revise sus datos")
}

//Ejercicio 6

let n1 = parseInt(prompt("Ingrese primer número"))
let n2 = parseInt(prompt("Ingrese segundo número"))
let n3 = parseInt(prompt("Ingrese tercer número"))

if(n1 > n2 && n1 >n3){
    alert(`${n1} Es mayor`)
}else if(n2 > n3 && n2 >n3){
    alert(`${n2} Es mayor`)
}else if(n3 > n1 && n3 >n2){
    alert(`${n3} Es mayor`)
}else if(n1 == n2 && n1 == n3 && n2 == n3 ){
    alert("Son iguales")
}

//Ejercicio 7


const diaSemana = prompt("Ingrese un día de la semana").toLowerCase();

if (diaSemana === "lunes") {
  console.log("Es lunes. Ánimo, comienza una nueva semana.");
} else if (diaSemana === "viernes") {
  console.log("Es viernes. ¡Ya casi es fin de semana!");
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
  console.log("Es fin de semana. ¡Disfruta y descansa!");
} else {
  console.log("El día ingresado no es lunes, viernes, sábado ni domingo.");
}


//Ejercicio 8

let calificacion = prompt("Digite una calificacion");


if(parseInt(calificacion) <= 6){
    alert("reprobado")
}else if(parseInt(calificacion) <= 8){
    alert("regular")
}else if(parseInt(calificacion) == 9){
    alert("bien")
}else if(parseInt(calificacion) == 10){
alert("excelente")
}else{
    alert("error")
}

//Ejercicio 9

var topping = window.prompt("qué topping quieres");
var precio = 0;
var helado = 50;
var precioFinal = 0;

if(topping=="oreo"){
    precio=10;
}else if(topping=="kitkat"){
    precio=15;
}else if(topping=="brownie"){
    precio=20;
}else{
    alert("no tenemos este topping, lo sentimos.")
    precio=0;
}

precioFinal= helado + precio;
alert("el helado cuesta "+precioFinal+ "MXN" )


//Ejercicio 10

const costoCourse = 4999; 
const costoCarrera = 3999; 
const costoMaster = 2999; 


const opcionElegida = prompt("Por favor, elige una opción: Course, Carrera o Master").toLowerCase();

let costoMensual = 0;
let duracionCurso = 0;

if (opcionElegida === "course") {
  costoMensual = costoCourse;
  duracionCurso = 2; 
} else if (opcionElegida === "carrera") {
  costoMensual = costoCarrera;
  duracionCurso = 6; 
} else if (opcionElegida === "master") {
  costoMensual = costoMaster;
  duracionCurso = 12; 
} else {
  alert("Opción no válida");
}
const tieneBeca = prompt("¿Tienes alguna beca? (Sí/No)").toLowerCase() === "sí";

if (tieneBeca) {
  const tipoBeca = prompt("Elige una beca: Facebook, Google o Jesua").toLowerCase();
  
  switch (tipoBeca) {
    case "facebook":
      costoMensual *= 0.8; 
      break;
    case "google":
      costoMensual *= 0.85; 
    case "jesua":
      costoMensual *= 0.5; 
      break;
    default:
      alert("Beca no válida");
      break;
  }
}

const costoTotal = costoMensual * duracionCurso;

alert(`El costo mensual con descuento para ${opcionElegida} es: $${costoMensual.toFixed(2)} MXN`);
alert(`El costo total para el curso de ${opcionElegida} (${duracionCurso} meses) es: $${costoTotal.toFixed(2)} MXN`);


//Ejercicio 11

const tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto o autobús)").toLowerCase();
const distanciaRecorrida = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros"));
const litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos"));


let precioKilometro = 0;
let cargoExtra = 0;

if (tipoVehiculo === "coche") {
  precioKilometro = 0.20;
} else if (tipoVehiculo === "moto") {
  precioKilometro = 0.10;
} else if (tipoVehiculo === "autobús") {
  precioKilometro = 0.5;
} else {
  alert("Tipo de vehículo no válido");
}

if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
  cargoExtra = 5;
} else if (litrosConsumidos > 100) {
  cargoExtra = 10;
} else {
  alert("Cantidad de litros consumidos no válida");
}

const totalAPagar = (precioKilometro * distanciaRecorrida) + cargoExtra;

alert(`Total a pagar: $${totalAPagar.toFixed(2)}`);
*/