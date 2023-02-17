window.onload = function() {
    let boton = document.getElementById('boton');
    boton.addEventListener('click',clicarBoton);
}

function clicarBoton() {
    this.style.backgroundColor = "green";
    let eventoEjercicio = new Ejercicio2();
}

class Ejercicio2{
    constructor(){
        this.maxCaracteres = parseInt(document.getElementById("maxCaracteres").textContent);
        this.areaTexto = document.getElementsByName('texto')[0];

        this.comprobarCaracteres = this.comprobarCaracteres.bind(this);

        this.areaTexto.addEventListener('keyup', this.comprobarCaracteres);
    }

    comprobarCaracteres(elEvento) {
        let nodoActivo = elEvento.currentTarget;
        
        alert(`Has introducido un caracter. El número máximo de caracteres es ${this.maxCaracteres}`);
    }
}