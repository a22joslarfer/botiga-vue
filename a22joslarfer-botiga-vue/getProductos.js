import { getProductos } from "./productos.js";
import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3.0.0/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            message: 'Hello Vue',
            divActual: 'portada',
            productos: [],
            carrito: [],
            total: 0,
            cantidad: 0,
        };
    },
    methods: {
        // id seria botiga-portada-checkout_menu ...
        // 
        mostraDiv(id) {
            this.divActual = id;
        },
        estatActiu(id) {
            if (id == this.divActual) {
                return true;
            } else {
                return false;
            }
        },
        AgregarAlCarrito(producto) {
            // el producto que le pasamos es producto_añadido, compara su id con los obj dentro de carrito,
            // si coinciden (este producto_añadido ya se encontraba en el carro)
            // no coinciden (este producto_añadido se esta añadiendo por 1era vez al carro)
            const carrito_item = this.carrito.find(producto_añadido => producto_añadido.id === producto.id);

            if (carrito_item) {
                // el producto esta en el carro de antes (cantidad++)
                carrito_item.cantidad++;
            } else {
                // el producto no estaba en el carro (cantidad=1)
                producto.cantidad = 1;
                this.carrito.push(producto);
            }

            this.actualizarTotal();
        },
        actualizarTotal() {
            let total = 0;
            for (const producto of this.carrito) {
                total += producto.precio * producto.cantidad;
            }
            this.total = total;
        },
        clearCesta() {
            while(this.carrito.length>0){
                this.carrito.pop();
            }
            this.total = 0;
            
        }
    }, 
    
    created() {
        getProductos().then(productos => {
            this.productos = productos;
        }).catch(error => {
            console.error("Error al obtener datos:", error);
        });
    }
}).mount('#app');