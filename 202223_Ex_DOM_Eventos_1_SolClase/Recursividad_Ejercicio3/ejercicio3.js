let maximo;
let num1;
let num2;
let lista = [1, 2, 3, 40, 27, 50, 72, 4, 3, 67];

function compararDosNumeros(num1, num2) {
    let numMayor;
    if (num1 >= num2) {
        numMayor =  num1;
    } else {
        numMayor = num2;
    }

    return numMayor;
} 

for (let i = 0; i < lista.length - 1; i++) {
    num1 = lista[i];
    num2 = lista[i + 1];

    if (maximo != undefined) {
        maximo = compararDosNumeros(maximo, num2);
    } else {
        maximo = compararDosNumeros(num1, num2);
    }
    

}
console.log(maximo);


