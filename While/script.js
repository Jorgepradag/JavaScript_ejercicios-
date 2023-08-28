//Ejercicio 1
// const numero = parseInt(prompt("Ingrese un numero"))

// let x = 1;

// while(x <= numero) {
//     if(x % 5 === 0){
//         console.log(x);
//     }x++;
// }

//Ejercicio 2

// const a = parseInt(prompt("Ingrese primer número"))
// const b = parseInt(prompt("Ingrese segundo número"))

// let contador = 1;

// while(contador <= 50){
//     if(contador === a || contador === b){
//         console.log(`¡Lotería! (${contador})`)
//     }else{
//         console.log(contador)
//     }contador++;
// }

//Ejercicio 3

// const numeros = [];

// function capturarNumeros() {
//   let numero = parseInt(prompt("Ingrese un número (0 para terminar):"));

//   while (numero !== 0) {
//     if (!isNaN(numero)) {
//       numeros.push(numero);
//     } else {
//       console.log("¡Ingrese un número válido!");
//     }

//     numero = parseInt(prompt("Ingrese otro número (0 para terminar):"));
//   }
// }

// capturarNumeros();
// console.log("Números capturados:", numeros);

//Ejercicio 4
// let concatenacion = '';

// function capturarPalabras() {
//   let entrada = prompt("Ingrese una letra o palabra (presione Enter para terminar):");

//   while (entrada !== '') {
//     concatenacion += entrada + ' ';
//     entrada = prompt("Ingrese otra letra o palabra (presione Enter para terminar):");
//   }
// }

// capturarPalabras();
// console.log("Concatenación de palabras:", concatenacion);

//Ejercicio 5
function mostrarMensaje(dia) {
    let mensaje = '';
  
    if (dia.toLowerCase() === 'lunes') {
      mensaje = 'Ánimo, es el inicio de la semana.';
    } else if (dia.toLowerCase() === 'martes') {
      mensaje = 'Poco a poco avanzamos.';
    } else if (dia.toLowerCase() === 'miercoles') {
      mensaje = 'Estamos a la mitad, ¡sigamos adelante!';
    } else if (dia.toLowerCase() === 'jueves') {
      mensaje = 'Ya casi es fin de semana.';
    } else if (dia.toLowerCase() === 'viernes') {
      mensaje = '¡Viernes, por fin!';
    } else if (dia.toLowerCase() === 'sábado') {
      mensaje = 'Disfruta tu día libre.';
    } else if (dia.toLowerCase() === 'domingo') {
      mensaje = 'Ve a descansar';
    } else {
      mensaje = 'Ese no parece ser un día válido.';
    }
  
    alert(mensaje);
  }
  
  function capturarDias() {
    let dia = prompt("Ingrese un día de la semana:");
  
    while (dia !== '') {
      mostrarMensaje(dia);
      
      if (dia.toLowerCase() === 'domingo') {
        break;
      }
      
      dia = prompt("Ingrese otro día de la semana:");
    }
  }
  
  capturarDias();