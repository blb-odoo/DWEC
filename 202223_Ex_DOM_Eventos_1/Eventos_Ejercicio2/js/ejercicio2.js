window.onload = function() {
    
}

function clicarBoton() {
    let eventoEjercicio = new Ejercicio2();
}

class Ejercicio2{
    constructor(){
        this.maxCaracteres;
        this.areaTexto;
    }

    comprobarCaracteres(elEvento) {
        let nodoActivo;
        
        alert(`Has introducido un caracter. El número máximo de caracteres es ${this.maxCaracteres}`);
    }
}