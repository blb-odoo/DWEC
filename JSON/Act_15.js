const jsonString = `{
    "contenedores" : [
        {"tipo" : "grande",
        "envases" : [
            {
                "tipo" : "grande ancho",
                "contenido" : [
                    {"tipo": "alimento", "nombre" : "agua"},
                    {"tipo": "alimento", "nombre" : "leche"},
                    {"tipo": "alimento", "nombre" : "aceite"},
                    {"tipo": "alimento", "nombre" : "vinagre"}
                ]
            },
            {
                "tipo" : "grande alto",
                "contenido" : [
                    {"tipo": "alimento", "nombre" : "agua"},
                    {"tipo": "alimento", "nombre" : "leche"},
                    {"tipo": "alimento", "nombre" : "aceite"},
                    {"tipo": "alimento", "nombre" : "vinagre"}
                ]
            }
        ]
    },
    {"tipo" : "mediano",
        "envases" : [
            {
                "tipo" : "mediano ancho",
                "contenido" : [
                    {"tipo": "alimento", "nombre" : "agua"},
                    {"tipo": "alimento", "nombre" : "leche"},
                    {"tipo": "alimento", "nombre" : "aceite"},
                    {"tipo": "alimento", "nombre" : "vinagre"}
                ]
            },
            {
                "tipo" : "mediano alto",
                "contenido" : [
                    {"tipo": "corrosivo", "nombre" : "lejía"},
                    {"tipo": "corrosivo", "nombre" : "amoniaco"},
                    {"tipo": "corrosivo", "nombre" : "jabón"},
                    {"tipo": "corrosivo", "nombre" : "aguarras"},
                    {"tipo": "corrosivo", "nombre" : "gasolina"},
                    {"tipo": "corrosivo", "nombre" : "alcohol"}
                ]
            }
        ]
    },
    {"tipo" : "verticales",
        "envases" : [
            {
                "tipo" : "pequeño",
                "contenido" : [
                    {"tipo": "corrosivo", "nombre" : "lejía"},
                    {"tipo": "corrosivo", "nombre" : "amoniaco"},
                    {"tipo": "corrosivo", "nombre" : "jabón"},
                    {"tipo": "corrosivo", "nombre" : "aguarras"},
                    {"tipo": "corrosivo", "nombre" : "gasolina"},
                    {"tipo": "corrosivo", "nombre" : "alcohol"}
                ]
            },
            {
                "tipo" : "grande alto",
                "contenido" : [
                    {"tipo": "alimento", "nombre" : "agua"},
                    {"tipo": "alimento", "nombre" : "leche"},
                    {"tipo": "alimento", "nombre" : "aceite"},
                    {"tipo": "alimento", "nombre" : "vinagre"}
                ]
            },
            {
                "tipo" : "mediano alto",
                "contenido" : [
                    {"tipo": "corrosivo", "nombre" : "lejía"},
                    {"tipo": "corrosivo", "nombre" : "amoniaco"},
                    {"tipo": "corrosivo", "nombre" : "jabón"},
                    {"tipo": "corrosivo", "nombre" : "aguarras"},
                    {"tipo": "corrosivo", "nombre" : "gasolina"},
                    {"tipo": "corrosivo", "nombre" : "alcohol"}
                ]
            }
        ]
    }
    ]          
}`;

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj.contenedores[0].tipo);
