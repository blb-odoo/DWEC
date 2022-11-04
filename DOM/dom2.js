document.addEventListener("DOMContentLoaded", function(event) {
    let nodoP = document.getElementById("introduccion");
    let elId1 = nodoP.attributes.getNamedItem("id").nodeValue;
    let elId2 = nodoP.attributes[0].nodeValue;
    nodoP.attributes.getNamedItem("id").nodeValue = "otroValor";

    let atributo =  document.createAttribute('lang');
    atributo.nodeValue = 'es';
    nodoP.attributes.setNamedItem(atributo);
});
