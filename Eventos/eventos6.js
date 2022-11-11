function mostraMissatge() {
    event.type = "click"
    console.log("Has clicat el ratolí");
   }

function mostraAltreMissatge() {
    console.log("Has clicat el ratolí i per això se mostren aquests missatge");
}

document.addEventListener("DOMContentLoaded", function() {
    let elDiv1 = document.getElementById("div_principal");
    let elDiv2 = document.getElementById("div_secundario");
    elDiv1.addEventListener("click", mostraMissatge, true);
    elDiv2.addEventListener("click", mostraAltreMissatge, true);
})
