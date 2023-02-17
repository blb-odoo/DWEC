// Apartado 1
let titulo1 = document.getElementsByTagName('h1')[0];
let titulo2 = document.getElementsByTagName('h2')[0];

titulo1.style.color = "red";

titulo1.id = "titulo1";

titulo1.dataset.posicion = 1;

// Apartado 2
let nodoDiv = document.getElementById("imagenes");
let imagen1 = document.createElement("img");
imagen1.src = "img/descarga.jpg";
nodoDiv.appendChild(imagen1);

// Apartado 3
let nodoP = document.getElementsByTagName("p")[0];
let imagen2 = document.createElement("img");
imagen2.src = "img/imagen1.webp";
nodoDiv.insertBefore(imagen2,nodoP);

// Apartado 4
nodoP.innerHTML = "Mi gato hace <strong>uyuyuy</strong>";