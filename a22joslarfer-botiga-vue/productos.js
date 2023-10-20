let data = {
    "productos": [
        {
            "id": 1,
            "nombre": "Producto 1",
            "precio": 19.99,
            "imagen": "colores/130-u.png",
            "cantidad": 0
        },
        {
            "id": 2,
            "nombre": "Producto 2",
            "precio": 24.95,
            "imagen": "colores/azul-clasico.png",
            "cantidad": 0
        },
        {
            "id": 3,
            "nombre": "Producto 3",
            "precio": 12.50,
            "imagen": "colores/azul-oscuro.png",
            "cantidad": 0
        },
        {
            "id": 4,
            "nombre": "Producto 4",
            "precio": 34.99,
            "imagen": "colores/carmesi.png",
            "cantidad": 0
        },
        {
            "id": 5,
            "nombre": "Producto 5",
            "precio": 9.99,
            "imagen": "colores/jet-stream.png",
            "cantidad": 0
        },
        {
            "id": 6,
            "nombre": "Producto 6",
            "precio": 49.99,
            "imagen": "colores/marron.png",
            "cantidad": 0
        },
        {
            "id": 7,
            "nombre": "Producto 7",
            "precio": 14.75,
            "imagen": "colores/midnight-sky.png",
            "cantidad": 0
        },
        {
            "id": 8,
            "nombre": "Producto 8",
            "precio": 29.99,
            "imagen": "colores/pistacho.png",
            "cantidad": 0
        },
        {
            "id": 9,
            "nombre": "Producto 9",
            "precio": 8.99,
            "imagen": "colores/rojo.png",
            "cantidad": 0
        },
        {
            "id": 10,
            "nombre": "Producto 10",
            "precio": 39.95,
            "imagen": "colores/serenity.png",
            "cantidad": 0
        },
        {
            "id": 11,
            "nombre": "Producto 11",
            "precio": 17.50,
            "imagen": "colores/tomatillo.png",
            "cantidad": 0
        },
        {
            "id": 12,
            "nombre": "Producto 12",
            "precio": 22.99,
            "imagen": "colores/jet-stream.png",
            "cantidad": 0
        },
        {
            "id": 13,
            "nombre": "Producto 13",
            "precio": 15.75,
            "imagen": "colores/azul-clasico.png",
            "cantidad": 0
        },
        {
            "id": 14,
            "nombre": "Producto 14",
            "precio": 31.99,
            "imagen": "colores/pistacho.png",
            "cantidad": 0
        },
        {
            "id": 15,
            "nombre": "Producto 15",
            "precio": 10.99,
            "imagen": "colores/130-u.png",
            "cantidad": 0
        },
        {
            "id": 16,
            "nombre": "Producto 16",
            "precio": 44.95,
            "imagen": "colores/carmesi.png",
            "cantidad": 0
        },
        {
            "id": 17,
            "nombre": "Producto 17",
            "precio": 18.50,
            "imagen": "colores/midnight-sky.png",
            "cantidad": 0
        },
        {
            "id": 18,
            "nombre": "Producto 18",
            "precio": 27.99,
            "imagen": "colores/tomatillo.png",
            "cantidad": 0
        },
        {
            "id": 19,
            "nombre": "Producto 19",
            "precio": 13.75,
            "imagen": "colores/rojo.png",
            "cantidad": 0
        },
        {
            "id": 20,
            "nombre": "Producto 20",
            "precio": 36.99,
            "imagen": "colores/serenity.png",
            "cantidad": 0
        }
    ]
}

export async function getProductos(){
    return data.productos; 
}
