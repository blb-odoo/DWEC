let maximo;
let num1;
let num2;
let lista = [1, 2, 3, 40, 27, 50, 72, 4, 3, 67];

for (i = 1; i < lista.length - 1; i++) {
    num1 = lista[i]
    num2 = lista[i + 1]
    maximo = elegirMayor(maximo,num2);
}

console.log(maximo);

function elegirMayor(num1, num2) {
    let numMayor;
    
    if (num1 >= num2) {
        numMayor = num1;
    } else {
        numMayor = num2;
    }

    return numMayor;
}


