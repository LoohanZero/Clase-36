// Televisor

// Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, el programa debe terminar. Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:
// CAMBIAR CANAL: permite ingresar un canal (0 al 99)
// CANAL SIGUIENTE: sube un canal
// CANAL ANTERIOR: baja un canal
// SUBIR VOLUMEN: sube en volumen en 5
// BAJAR VOLUMEN: disminuye en volumen en 5
// MUTEAR: pone el volumen en 0
// Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.

let televisor = confirm("¿Desea encencer el televisor");
let volumen = Math.round(Math.random() * 49) + 1;
let canal = Math.round(Math.random() * 98) + 1;

switch(televisor) {
    case true: 
        let queHacer = Number(prompt(`El televisor está en el canal ${canal} y el volumen es ${volumen}, ¿qué desea hacer (ingrese el número de la opción a elegir)?
        
        Opciones:
        1 - Cambiar de canal.
        2 - Ir al canal siguiente.
        3 - Ir al canal anterior.
        4 - Subir el volumen.
        5 - Bajar el volumen.
        6 - Mutear.`))

        switch(queHacer) {

            case 1:
                canal = Number(prompt("Ingrese un canal del 1 al 99."));
                alert(`Ahora usted está en el canal ${canal}`);
            break

            case 2:
                canal += 1;
                alert(`Ahora usted está en el canal ${canal}`);
            break

            case 3:
                canal -= 1;
                alert(`Ahora usted está en el canal ${canal}`);
            break

            case 4:
                volumen += 5;
                alert(`Ahora su volumen es de ${volumen}`);
            break

            case 5:
                volumen -= 5;
                alert(`Ahora su volumen es de ${volumen}`);
            break

            case 6:
                volumen -= volumen;
                alert(`Ahora su volumen es de ${volumen}`);
            break

            default: 
                alert("Elija una opción correcta");
            break

        }

    default:

    break
}