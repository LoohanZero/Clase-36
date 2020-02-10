// Número mayor o menor

// Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.

const mayorMenor = prompt("¿Desea buscar el mayor o menor número de un conjunto?");
const cantidad = Number(prompt("¿Entre cuánta cantidad de números desea buscar?"));
let numeroMayor = 0;
let numeroMenor = 9999999999999999999999999999;


switch(mayorMenor) {
    case "mayor":
        for (i = 1; i <= cantidad; i++) {
            let pidonumero = Number(prompt(`Ingrese un número. Le quedan por ingresar ${(cantidad + 1) -i}.
            `));
        
            if (pidonumero > numeroMayor) {
                numeroMayor = pidonumero;
            } 
        }

        alert(`El ${mayorMenor} número encontrado fue ${numeroMayor}`);
    break 
    case "menor":
        for (i = 1; i <= cantidad; i++) {
            let pidonumero = Number(prompt(`Ingrese un número. Le quedan por ingresar ${(cantidad + 1) -i}.
            `));
        
            if (pidonumero < numeroMenor) {
                numeroMenor = pidonumero;
            } 
        }
        alert(`El ${mayorMenor} número encontrado fue ${numeroMenor}`);
    break
}



