// Factorial

// Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 24

const numero = Number(prompt("Ingrese un número"));
let factorial = 1;

for (i = numero; i >= 1; i--) {
    factorial *= i;
}

alert(`El factorial del número ${numero} es ${factorial}.`)