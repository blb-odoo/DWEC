let maxFilas = prompt('¿Cuántas filas quieres?');
let maxColumnas = prompt('¿Cuántas columnas quieres?');
let numMinas = prompt('¿Cuántas minas quieres introducir?');


// Creamos el tablero en html
/*
document.write('<table>');

for (let i=0; i < maxFilas; i++) {
    document.write('<tr>');

    for (let j = 0; j < maxColumnas; j++) {
        document.write('<td></td>');
    }

    document.write('</tr>');
}
document.write('</table>');
*/

// Crear array bidimensional para guardar las minas

let arrayTablero = [];
let contadorMinas = 0;
let posFila;
let posColumna;


while (contadorMinas < numMinas) {
    posFila = Math.floor(Math.random()*maxFilas);
    posColumna = Math.floor(Math.random()*maxColumnas);

    if (arrayTablero[posFila][posColumna] != 'MINA') {
        arrayTablero[posFila][posColumna] = 'MINA';
        contadorMinas++ ;
    };
  };

console.log(arrayTablero);

    




