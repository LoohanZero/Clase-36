// ATM

// Crear un programa que permita hacer las siguientes operaciones: EXTRAER, DEPOSITAR, TRANSFERIR, CAMBIAR PIN, SALIR.
// El programa debe tener un dinero inicial
// El programa debe tener un PIN inicial
// Para empezar a utilizarlo y llegar al menú de opciones, debe pedir ingresar el PIN. Si se lo ingresa incorrectamente debe terminar el programa
// EXTRAER debe pedir cuánto se desea extraer y mostrar luego el dinero restante, sólo si la extracción es menor al dinero disponible
// DEPOSITAR debe pedir cuánto se desea ingresar y mostrar luego el dinero resultante
// TRANSFERIR debe pedir por un CBU (o alias) a transferir, preguntar cuánto se desea transferir y mostrar el dinero restante, si la transferencia es menor al dinero disponible y si el CBU es válido. Los CBU o alias válidos posibles (2 o 3) deben estar guardados en variables.
// CAMBIAR PIN debe pedir primero por la contraseña nueva y luego por la contraseña original para confirmar el cambio
// SALIR debe mostrar un mensaje de despedida
// En cualquier situación mostrar mensajes de lo que esté pasando operaciones exitosas

let dinero = 15000;
let pin = 1234;
const cbu1 = "00000000000000000000";
const cbu2 = "01234567891011121314";
const alias1 = "MENTA.MARIPOSA.AGUANTE";
const alias2 = "ZANJA.GRILLO.AGUA";

let inicio = Number(prompt("Para comenzar, ingrese su número de pin"));
const error = inicio !== pin;

switch(inicio) {

    case pin:
        let queHacer = Number(prompt(`Usted posee actualmente ${dinero} pesos. ¿Qué operación desea realizar? Ingrese el número de operación correspondiente:

        1 - Extraer.
        2 - Depositar.
        3 - Transferir.
        4 - Cambiar pin.
        5 - Salir.
        `))

        switch(queHacer) {
            case 1:
                let extraer = Number(prompt(`Usted posee actualmente ${dinero} pesos, ingrese la cantidad de dinero a extraer.`));

                if (extraer > dinero) {
                    alert("Usted no posee fondos suficientes para realizar la operación solicitada, inténtelo nuevamente.");
                }
                else if (extraer <= dinero) {
                    dinero -= extraer;
                    alert(`La operación ha sido exitosa. Usted ha extraído ${extraer} pesos, le quedan ${dinero} pesos en la cuenta. Que tenga un buen día. `)
                }
                else {
                        alert("Ingrese una opción válida");
                }
            break

            case 2: 
                let depositar = Number(prompt(`Usted posee actualmente ${dinero} pesos, ingrese la cantidad de dinero a depositar.`))
                dinero += depositar;

                alert(`La operación ha sido exitosa. Usted ha depositado ${depositar} pesos, ahora tiene ${dinero} pesos en la cuenta. Que tenga un buen día. `)
            break
                
            case 3:
                const aliasCBU = prompt("Ingrese el Alias o el CBU al que desea transferir");
                let transferir = Number(prompt(`Usted posee actualmente ${dinero} pesos, ingrese la cantidad de dinero a transferir.`));

                switch(aliasCBU) {

                    case cbu1:

                        if(transferir<= dinero) {
                                dinero -= transferir;
                                alert(`La operación ha sido exitosa. Usted ha transferido ${transferir} pesos al CBU o Alias ${aliasCBU}, ahora tiene ${dinero} pesos en la cuenta. Que tenga un buen día. `)
                         }
                         else if (transferir > dinero) {
                            alert("Usted no posee fondos suficientes para realizar la operación solicitada, inténtelo nuevamente.") 
                         }
                         else {
                            alert("Ingrese una opción válida");
                         }
                    
                       
                    break
                    
                    case cbu2:

                        if(transferir<= dinero) {
                            dinero -= transferir;
                            alert(`La operación ha sido exitosa. Usted ha transferido ${transferir} pesos al CBU o Alias ${aliasCBU}, ahora tiene ${dinero} pesos en la cuenta. Que tenga un buen día. `)
                     }
                     else if (transferir > dinero) {
                        alert("Usted no posee fondos suficientes para realizar la operación solicitada, inténtelo nuevamente.") 
                     }
                     else {
                        alert("Ingrese una opción válida");
                     }
                
                    break

                    case alias1:

                        if(transferir<= dinero) {
                            dinero -= transferir;
                            alert(`La operación ha sido exitosa. Usted ha transferido ${transferir} pesos al CBU o Alias ${aliasCBU}, ahora tiene ${dinero} pesos en la cuenta. Que tenga un buen día. `)
                     }
                     else if (transferir > dinero) {
                        alert("Usted no posee fondos suficientes para realizar la operación solicitada, inténtelo nuevamente.") 
                     }
                     else {
                        alert("Ingrese una opción válida");
                     }
                
                    break

                    case alias2:
                        if(transferir<= dinero) {
                            dinero -= transferir;
                            alert(`La operación ha sido exitosa. Usted ha transferido ${transferir} pesos al CBU o Alias ${aliasCBU}, ahora tiene ${dinero} pesos en la cuenta. Que tenga un buen día. `)
                     }
                     else if (transferir > dinero) {
                        alert("Usted no posee fondos suficientes para realizar la operación solicitada, inténtelo nuevamente.") 
                     }
                     else {
                        alert("Ingrese una opción válida");
                     }
                
                    break

                    default: 
                        alert("Ingrese un CBU o un alias correcto. Inténtelo nuevamente. ");

                }
            break

            case 4:
                let cambio = Number(prompt("Ingrese su nuevo pin numérico de 4 dígitos."));



                if (cambio === pin) {
                    alert("Ingrese un nuevo número de pin, inténtelo nuevamente");
                }
                else if (cambio !==pin) {

                    let viejo = Number(prompt("Ingrese el viejo número de pin para confirmar la operación"));


                    if (viejo === pin) {
                        pin = cambio;
                        alert("Su operación ha sido exitosa, usted ha cambiado su número de pin. Que tenga un buen día.")

                    }
                    else {
                        alert("Ingrese un número de pin válido, inténtelo nuevamente.")
                    }
            
                }
            case 5:
                alert("Muchas gracias, que tenga un buen día.")    
        }
}