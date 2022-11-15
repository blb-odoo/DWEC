let arrayAleatorios = [];
let numAleatorio;

for (let i=0; i<15; i++) {
    numAleatorio = Math.floor(Math.random()*10 + 1);

    arrayAleatorios.push(numAleatorio);
}
// Por consola
/*
let asteriscos;

for (let aleatorio of arrayAleatorios) {
    asteriscos = "";
    for (let i=0; i<aleatorio; i++) {
        asteriscos = asteriscos + '*';
    }
    console.log(asteriscos);
}
*/

// Por navegador
for (let aleatorio of arrayAleatorios) {
    document.write('<p>')
    for (let i=0; i<aleatorio; i++) {
        document.write('*');
    }
    document.write('</p>');
}

