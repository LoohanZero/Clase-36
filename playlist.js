// Playlist

// Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

const playlist = prompt("Ingrese el nombre de su nueva playlist");
const cantidad = Number(prompt("¿Cuántas canciones desea ingresar a la misma?"));

let cancion = "";

for (i = 1; i <= cantidad; i++) {
    let agrego = prompt(`Ingrese el nombre de una canción y su intérprete, quedan por agregar ${(cantidad + 1) - i}
    Usted agregado por el momento: 
    ${cancion}`);
    
    cancion += `- ${agrego} \n`;
}

alert(`Su playlist se llama ${playlist} y ha agregado a la misma las siguientes canciones:
${cancion}`);