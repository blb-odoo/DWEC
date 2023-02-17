const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);



// Usando foreach
/*
registroPacientes.forEach(function(valor, clave) {
    let numeroRegistro = clave;
    i++

    // SEPARANDO LOS VALORES CON EL SPLIT PASO A PASO
    // let primerSplit = valor.split(') -> ');
    // let direccion = primerSplit[1];
    // let nombreCompletoYnumeroSS = primerSplit[0];
    // let segundoSplit = nombreCompletoYnumeroSS.split(' (');
    // let nombreCompleto = segundoSplit[0];
    // let numeroSS = segundoSplit[1];

    // SEPARANDO LOS VALORES CON EL SPLIT REFACTORIZADO
    let direccion = valor.split(') -> ')[1];
    let nombreCompleto = valor.split(') -> ')[0].split(' (')[0];
    let numeroSS = valor.split(') -> ')[0].split(' (')[1];
    
    let valorCompleto = `numeroRegistro: ${numeroRegistro}, nombreCompleto: ${nombreCompleto} , numeroSS: ${numeroSS}, direccion: ${direccion}`

    mapaNuevo.set(`Paciente ${i}`, valorCompleto);
    
}

);
*/
// Usando un for
function crearMapaNuevo(mapa) {
    let i = 0;
    let mapaNuevo = new Map();

    for (let [clave, valor] of mapa) {
        let numeroRegistro = clave;
        i++
    
        // SEPARANDO LOS VALORES CON EL SPLIT REFACTORIZADO
        let direccion = valor.split(') -> ')[1];
        let nombreCompleto = valor.split(') -> ')[0].split(' (')[0];
        let numeroSS = valor.split(') -> ')[0].split(' (')[1];
        
        let valorCompleto = `numeroRegistro: ${numeroRegistro}, nombreCompleto: ${nombreCompleto} , numeroSS: ${numeroSS}, direccion: ${direccion}`
    
        mapaNuevo.set(`Paciente ${i}`, valorCompleto);
    }

    return mapaNuevo;
}

console.log(crearMapaNuevo(registroPacientes));
