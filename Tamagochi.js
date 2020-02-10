// Tamagochi

// Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
// ALIMENTAR: +3 energía, +2 felicidad
// JUGAR: +2 felicidad, -2 energía, -1 limpieza
// DORMIR: +5 energía, +2 salud, -2 limpieza
// VACUNAR: +5 salud, -6 felicidad
// BAÑAR: +3 salud
// RETAR: -3 felicidad
// ACARICIAR: +4 felicidad
// Cuando el usuario selecciona una, debe mostrar el valor final de las variables.

let salud = Math.round(Math.random() * 9) + 1;
let felicidad = Math.round(Math.random() * 9) + 1;
let limpieza = Math.round(Math.random() * 9) + 1;
let energia = Math.round(Math.random() * 9) + 1;


const tamagochi = Number(prompt(`Su Tamagochi Juancito está en los siguientes valores: 

Salud: ${salud}
Felicidad:  ${felicidad}
Limpieza:  ${limpieza}
Energía:  ${energia}

Las opciones a realizar son 

1 - Alimentarlo
2 - Jugar con él
3 - Hacerlo dormir
4 - Vacunarlo
5 - Bañarlo
6 - Retarlo
7 - Acariciarlo

Ingrese el número correspondiente a la acción que desea realizar.`))


switch(tamagochi) {
    case 1: 
        energia += 3;
        felicidad += 2;
    break   

    case 2:
        felicidad += 2;
        energia -= 2;
        limpieza -= 1;
    break

    case 3:
        energia += 5;
        salud += 2;
        limpieza -= 2;
    break

    case 4:
        salud += 5;
        felicidad -= 6;
    break

    case 5:
        salud += 3;
    break

    case 6: 
        felicidad -= 3;
    break

    case 7: 
        felicidad += 4;
    break

    default:
        alert("Ingrese un número válido")
}        

alert(`Su Tamagochi Juancito está ahora en los siguientes valores: 

Salud: ${salud}
Felicidad:  ${felicidad}
Limpieza:  ${limpieza}
Energía:  ${energia}
`)