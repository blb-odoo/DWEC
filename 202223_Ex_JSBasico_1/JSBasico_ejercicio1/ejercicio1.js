// Ejercicio1.1
let numero; 
do {
    numero = parseInt(prompt('Dame un número entre el 1 y el 10'));
} while (numero < 1 || numero > 10)

function comprobarNumeros(numero) {
    let numeroAleatorio = Math.floor(Math.random()*10 + 1);
    let comprobacion = true;

    if (numeroAleatorio != numero) {
        return false;
    }

    return comprobacion;  
}

if (comprobarNumeros(numero)) {
    alert('¡Enhorabuena, has acertado!');
} else {
    alert('Lo sentimos, NO has acertado');
}