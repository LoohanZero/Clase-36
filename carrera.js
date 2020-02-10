// `Carrera

// Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:
// Cantidad de vueltas: 3
// Vuelta 1: 133s
// Vuelta 2: 145s
// Vuelta 3: 166s
// ⏱ Promedio: 144.45s`


const vueltas = Number(prompt("¿Cuántas vueltas va a dar a la pista?"));
let tiempo = "";
let tiempoVuelta = 0;

for (i = 1; i <= vueltas; i++) {
    unaVuelta = Number(prompt("¿Cuántos segundos tardó en dar la vuelta?"));

    tiempoVuelta += unaVuelta;
    tiempo += `Vuelta ${i}: ${unaVuelta} segundos\n`

}
const promedio = tiempoVuelta / vueltas;

alert(`El promedio de vueltas es ${promedio} segundos.
Los tiempos de cada vuelta fueron: 
${tiempo}`)

