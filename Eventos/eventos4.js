let cambiarColorBorde = function () {
    if (this.style.borderColor == 'silver'){
        this.style.borderColor='black';
    } else if (this.style.borderColor == 'black'){
        this.style.borderColor='silver';
    }
}

window.onload = function () {
    let elemento = document.getElementById("continguts2");
    elemento.onmouseover = cambiarColorBorde;
}
