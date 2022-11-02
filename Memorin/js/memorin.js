class Tablero {
    constructor(numFilas, numColumnas) {
        this.numFilas = numFilas;
        this.numColumnas = numColumnas;

        this.crearTableroVacio();
    }

    crearTableroVacio(){
        this.tablero = [];

        for (let fila = 0; fila < this.numFilas; fila++){
            this.tablero[fila] = [];

            for (let columna = 0; columna < this.numColumnas; columna++) {
                this.tablero[fila][columna] = "";
            }
        }
    }

    dibujarTableroHTML(){
        document.write(`<table>`);
       
        for (let fila = 0; fila < this.numFilas; fila++){;
            document.write(`<tr>`);

            for (let columna = 0; columna < this.numColumnas; columna++) {
                document.write(`<td>${this.tablero[fila][columna]}</td>`);
            }

            document.write(`</tr>`);
        }
        
        document.write(`</table>`);
    }
}

class TableroMemorin extends Tablero{
    constructor(numFilas, numColumnas) {
        super(numFilas, numColumnas);
        this.numCasillas = this.numFilas*this.numColumnas;
        
        this.crearArrayImagenes(`imagenes/`);

        let numImgRepes = 2;

        let arrayParejas = this.crearArrayImgRepes(numImgRepes);
        let arrayParejasDesordenadas = this.desordenarArray(arrayParejas);
        this.llenarTablero(arrayParejasDesordenadas);
    }

    crearArrayImagenes(url) {
        this.imagenes = [];
        let maxImagenes = 10;

        for (let numImagen = 1; numImagen <= maxImagenes; numImagen++){
            this.imagenes.push(`${url}img${numImagen}.jpg`);
        }
    }

    crearArrayImgRepes(numImgRepes){
        let arrayImgRepes = [];
        let pos = 0;
        let contCasillas = 0;
        
        while ( contCasillas < this.numCasillas) {
            for (let numImg = 0; numImg < numImgRepes; numImg++){
                arrayImgRepes.push(this.imagenes[pos]);
                contCasillas++;
            }

            pos++;

            if (pos == this.imagenes.length) {
                pos = 0;
            }
        }
            
        return arrayImgRepes;
    }

    desordenarArray(array){
        return array.sort(() => 0.5 - Math.random());
    }

    llenarTablero(arrayImgRepes) {
        let contador = 0;

        for (let fila = 0; fila < this.numFilas; fila++){
            for (let columna = 0; columna < this.numColumnas; columna++){
                this.tablero[fila][columna] = `<img src="${arrayImgRepes[contador]}">`;
                contador++;
            }
        }
    }

}

class Memorin {
    constructor(){
        do {
            this.respuestasUsuario = this.preguntarDatosUsuario();

            // Convertir las respuestas a números enteros
            this.convertirRespuestas();

            // Si hay error, envía un mensaje
            this.mensajeError();

        } while (!this.sonRespuestasCorrectas());
        
        this.tablero = new TableroMemorin(this.respuestasUsuario[0], this.respuestasUsuario[1]);
        this.tablero.dibujarTableroHTML();
    }

    preguntarDatosUsuario(){
        let numFilas = prompt('¿Cuántas filas quieres?');
        let numColumnas = prompt('¿Cuántas columnas quieres?');

        return [numFilas, numColumnas]
    }

    convertirRespuestas(){
        for (let i = 0; i < this.respuestasUsuario.length; i++) {
            this.respuestasUsuario[i] = Number.parseInt(this.respuestasUsuario[i]);
        }
    }
    
    mensajeError() {
        if (!this.sonRespuestasCorrectas()) {
            alert('El número total de casillas ha de ser par. ' +
                'Y el número de filas y columnas un número entero.');
        }
    }

    sonRespuestasCorrectas() {
        let numCasillas = this.respuestasUsuario[0]*this.respuestasUsuario[1];

        return (this.esPar(numCasillas) && 
            Number.isInteger(this.respuestasUsuario[0]) && 
            Number.isInteger(this.respuestasUsuario[1]))
    }

    esPar(numero){
        return (numero) % 2 == 0;
    }

}

 let juegoMemorin = new Memorin();