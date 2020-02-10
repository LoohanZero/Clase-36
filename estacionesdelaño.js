// Estaciones del año II

// Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina


const estacion = prompt("Ingrese una estación del año");

switch(estacion) {
    case "verano":
        alert("El verano comienza el 21 de diciembre y termina el 21 de marzo.")
    break

    case "otoño":
        alert("El otoño comienza el 21 de marzo y termina el 21 de junio.")
    break

    case "invierno":
        alert("El verano comienza el 21 de junio y termina el 21 de septiembre.")
    break

    case "primavera":
        alert("El verano comienza el 21 de septiembre y termina el 21 de diciembre.")
    break

    default:
        alert("Ingrese una estación válida.")
    break
}