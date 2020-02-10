// iedra, papel, tijera II

// Al ejercicio de Piedra, papel, tijera de condicionales, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y rondas restantes. Al finalizar se debe indicar quién ganó. Ejemplo:
// Ronda: 2 de 5
// 🙍‍♀️ Jugadora: Piedra
// 👾 Computadora: Tijera
// Jugadora ha ganado esta ronda 🎉
// Puntaje: 2 (Jugadora) - 0 (Computadora)


const cantidad = Number(prompt("¿Cuánta cantidad de veces desea jugar?"));
let ganaJugador = 0;
let ganaMaquina = 0;

for (i = 1; i <= cantidad; i++) {


    let random = Math.round(Math.random() * 300);
    const jugador = prompt("Ingrese piedra, papel o tijera");
    let ganador = "";
  
    if (random > 200) {
        random = "piedra"
    } 
    else if (random > 100) {
        random = "papel"
    }
    else {
        random = "tijera"
    };

    if (jugador === random){
        alert(`La máquina y usted han empatado, usted eligió ${jugador} y la máquina eligió ${random}`);
    }
    else {
        if (jugador === "tijera" && random === "papel") {
            alert(`Usted ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`);
            ganador = `Jugador ha ganado esta ronda.`;
            ganaJugador += 1;

        } 
        else if (jugador === "tijera" && random === "piedra") {
            alert(`La máquina ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`);
            ganador = `La máquina ha ganado esta ronda.`;
            ganaMaquina += 1;
        }
        else if (jugador === "piedra" && random === "papel") {
            alert(`La máquina ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`);
            ganador = `La máquina ha ganado esta ronda.`;
            ganaMaquina += 1;
        }
        else if (jugador === "piedra" && random === "tijera") {
            alert(`Usted ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`);
            ganador = `Jugador ha ganado esta ronda.`;
            ganaJugador += 1;
        }
        else if (jugador === "papel" && random === "tijera") {
            alert(`La máquina ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`);
            ganador = `La máquina ha ganado esta ronda.`;
            ganaMaquina += 1;
        
        }
        else if (jugador === "papel" && random === "piedra") {
            alert(`Usted ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`);
            ganador = `Jugador ha ganado esta ronda.`;
            ganaJugador += 1;
        }
        else {
            alert("Usted no ha ingresado las opciones correctas, inténtelo nuevamente.");
        }
    }

    alert(`Ronda ${i} de ${cantidad}.
    Jugadora: ${jugador}.
    Computadora: ${random}.
    ${ganador}
    Puntaje: ${ganaJugador} (Jugadora) - ${ganaMaquina} (Computadora).
        `)
    
}

