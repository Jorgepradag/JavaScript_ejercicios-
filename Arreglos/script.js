/*//Ejercicio 1
const numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100); 
  numerosAleatorios.push(numeroAleatorio);
}
console.log("Array de números aleatorios:", numerosAleatorios);

//Ejercicio 2

const inputString = prompt("Ingrese un string con palabras separadas por comas");

const arrayPalabras = inputString.split(",");


console.log("Array resultante:", arrayPalabras);
*/
//Ejercicio 3

const numeros = [10, 40, 30, 20, 15, 5];

let max = Math.max(...numeros)
let min = Math.min(...numeros)
let numerosOrdenados = numeros.slice().sort((a, b) => a - b);

console.log("El valor maximo es" ,max);
console.log("El valor minimo es" ,min);
console.log("Números ordenanos menor a mayor" ,numerosOrdenados);