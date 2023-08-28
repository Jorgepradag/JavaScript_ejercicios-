//Ejercicio 1
// for(let i = 1; i <= 50 ; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

//Ejercicio 2

// const fetch = require('node-fetch');

// const pokemonURL = 'https://pastebin.com/raw/Zzk8g7Z6';
// async function mostrarPokemonMultiplosDe5(numero) {
//   try {
//     const response = await fetch(pokemonURL);
//     const data = await response.text();
//     const pokemons = JSON.parse(data);

//     for (let i = 0; i < numero; i++) {
//       if ((i + 1) % 5 === 0) {
//         console.log(pokemons[i].name);
//       }
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// const numeroUsuario = parseInt(prompt('Introduce un número: '));

// mostrarPokemonMultiplosDe5(numeroUsuario);

//Ejercicio 3

const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < arreglo.length; i++) {
  if (typeof arreglo[i] === "number") {
    console.log(arreglo[i]);
  }
}