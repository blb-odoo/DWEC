document.addEventListener("DOMContentLoaded", function(event) {
   

   let nuevoP = document.createElement("p");
   nuevoP.innerHTML = "Nuevo valor del párrafo";

   let nodoPrevio = document.getElementById("provisional");
   nodoPrevio.parentNode.replaceChild(nuevoP,nodoPrevio);
});
