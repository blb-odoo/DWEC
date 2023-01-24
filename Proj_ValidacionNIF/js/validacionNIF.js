/**
 * Función para validar el nombre y apellidos del formulario
 */
function validarNombre() {
    let patron = /^[A-Za-záéíóúüàèiòÁÉÍÓÚÀÈÒÜñÑçÇ]{2,}$/;

    this.className = "";
    if (patron.test(this.value)) {
        this.className = "verde";
    }
}

/**
 * Función para validar el email del formulario
 */

window.addEventListener('load', function(){
    let nombre = document.getElementById('nombre');

    nombre.addEventListener('keyup', validarNombre);
});