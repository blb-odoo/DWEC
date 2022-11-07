document.addEventListener("DOMContentLoaded", function(event) {
   // Primera forma 
   /*
    let tercerParrafo = document.createElement("p");
   let textoParrafo = document.createTextNode("Tercer párrafo");
   tercerParrafo.appendChild(textoParrafo);

   document.body.appendChild(tercerParrafo);
    */

   // Segunda forma
   let tercerParrafo = document.createElement("p");
   tercerParrafo.innerHTML = "TercerPárrafo";

   document.body.appendChild(tercerParrafo);


});
