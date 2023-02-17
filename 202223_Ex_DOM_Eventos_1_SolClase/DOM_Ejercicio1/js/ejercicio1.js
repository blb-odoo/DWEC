// Apartado 1
let nodoh1 = document.getElementsByTagName('h1')[0];
let nodoh2 = document.getElementsByTagName('h2')[0];

nodoh1.style.color = "red";
nodoh1.id = "titulo1";
nodoh1.dataset.posicion = 1;

// Apartado 2
let nodoDiv = document.getElementById("imagenes");
let imagen1 = document.createElement('img');
imagen1.src = "img/descarga.jpg";
nodoDiv.appendChild(imagen1);

// Apartado 3
let nodoP = document.getElementsByName('texto')[0];
let imagen2 = document.createElement('img');
imagen2.src = "img/imagen1.webp";
nodoDiv.insertBefore(imagen2, nodoP);

// Apartado 4
nodoP.innerHTML = "Mi gato hace <strong>uyuyuy</strong>";

