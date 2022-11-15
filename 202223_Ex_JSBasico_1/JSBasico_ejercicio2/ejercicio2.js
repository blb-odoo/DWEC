class NIF {
    constructor(numero, letra) {
        this.numero = numero;
        this.letra = letra;
    }

    esCorrecto() {
        const arrayLetrasResto = ['T','R', 'W', 'A', 'G', 'M', 
        'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 
        'V', 'H', 'L', 'C', 'K', 'E'];

        let resto;
        let comprobacion = false;
        
        if (this.numero > 0 && this.numero < 10000000) {
            resto = this.numero % 23;

            if (this.letra == arrayLetrasResto[resto]) {
                comprobacion = true;
            }
        }

        return comprobacion
    }
}

let NIF1 = new NIF(2255667, 'B');
document.write(NIF1.esCorrecto());
let NIF2 = new NIF(1156987, 'A');
document.write(NIF2.esCorrecto());