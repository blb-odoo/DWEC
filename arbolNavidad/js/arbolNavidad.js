class ArbolNavidad {
    constructor (anchuraMax) {
        // this.pisos = pisos;
        this.anchuraMax = anchuraMax;
    }

    crearArbolDOM(nodoPadre){

        this.dibujarCopaArbolDOM(nodoPadre);
        this.dibujarTroncoArbolDOM(nodoPadre);
        
    }

    dibujarCopaArbolDOM(nodo){
        let rama;
        let anchuraRama = 1;

        while (anchuraRama <= this.anchuraMax) {
            rama = document.createElement('p');
            for (let i = 0; i < anchuraRama; i++) {
                rama.innerHTML = rama.innerHTML + '* ';  
            }

            rama.className = `copa`;
            anchuraRama++;

            nodo.appendChild(rama);
        }  

    }

    dibujarTroncoArbolDOM(nodo) {
        let alturaTronco = this.anchuraMax / 5;
        let anchuraTronco = this.anchuraMax / 3;

        let filaTronco;
        for (let i = 0; i < alturaTronco; i++) {
            filaTronco = document.createElement('p');

            for (let j = 0; j < anchuraTronco; j++) {
                filaTronco.innerHTML = filaTronco.innerHTML + "* ";
            }
            filaTronco.className = `tronco`;
            
            nodo.appendChild(filaTronco);
        }
    }

    encenderEstrella() {
        let nodoEstrella = document.getElementsByClassName('copa')[0];

        nodoEstrella.classList.add('estrellaEncendida');
    }

    encenderLucesRojas(numLuces){
        let posiblesLuces = document.body.getElementsByTagName
    }

    encenderLucesVerdes(numLuces) {

    }

    encenderLucesAzules(numLuces) {

    }

    encenderTodasLuces(numLuces) {

    }

    encenderLucesParpadeantes(numLuces) {

    }
}

class PostalInteractiva {
    constructor() {
        let nodoBody = document.body;
        let divArbol = document.createElement('div');
        let anchuraMax = prompt('Indica anchura máxima de la copa del árbol: ');
        let coloresLuces = ['red', 'green', 'blue'];
        
        let boton;
        let divBotones = document.createElement('div');

        for (let i = 0; i < coloresLuces.length; i++) {
            boton = document.createElement('button'),
            boton.classList.add(coloresLuces[i]);
            boton.type = 'button';
            boton.value = coloresLuces[i];
            // boton.value(coloresLuces[i]);
            divBotones.appendChild(boton);
        }

        nodoBody.appendChild(divBotones);

        let arbol = new ArbolNavidad(anchuraMax);
        nodoBody.appendChild(divArbol);
        // nodoBody.appendChild(nodoDiv);
        arbol.crearArbolDOM(divArbol);
        arbol.encenderEstrella();
        
    }

}

window.addEventListener('load', function() {
    let postal1 = new PostalInteractiva();
});
