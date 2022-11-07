document.addEventListener("DOMContentLoaded", function(event) {
   let imagen = document.getElementsByTagName("img");

   let valorSRC = imagen[0].src;
   let nombreClase = imagen[0].className;

   // Acceso a las propiedades de style
   let p = document.getElementById("paragraf");
   p.style.color = "#000";
});
