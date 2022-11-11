function cambiarColorDiv2(elemento) {
    document.getElementById(elemento).style.borderColor='black';
    // document.getElementById(elemento).style.borderColor='silver';
}

function cambiarColorDiv3(elemento) {
    if (elemento.style.borderColor == 'silver'){
        elemento.style.borderColor='black';
    } else if (elemento.style.borderColor == 'black'){
        elemento.style.borderColor='silver';
    }
        
}