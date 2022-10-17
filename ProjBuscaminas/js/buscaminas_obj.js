class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
    }

    crearTablero () {
        // Crear array bidimensional para guardar las minas
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    
}

const buscaminas = new Tablero(4,3);
buscaminas.columnas = 5;
console.log(buscaminas.filas);
console.log(buscaminas.columnas);
console.log(buscaminas.arrayTablero);
buscaminas.crearTablero()
console.log(buscaminas.arrayTablero);

