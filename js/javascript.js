class Disco {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase()
        this.precio = precio * 1.21
        this.vendido = false
    }

}

class Carrito {
    constructor() {
        this.valorTotal = 0
        this.cantidadItems = 0
        this.discos = []
    }

    agregarAlCarrito (Disco) {
 
        if (!this.discos.includes(Disco)) {

            this.valorTotal += Disco.precio
            this.cantidadItems++
            this.discos.push(Disco)
        }  
    }

    comprar () {
        for (const disco of discos) {
            disco.vendido = true
        }
        this.valorTotal = 0
        this.cantidadItems = 0
        this.discos = []
    }

    vaciarCarrito () {

        const cantidades = document.getElementsByClassName("cantidad")
        cantidades.innerHTML = 0

        const subtotal = document.getElementById("subtotal")
        const iva = document.getElementById("iva")
        const total = document.getElementById("total")

        subtotal.innerHTML = "$ 0,00"
        iva.innerHTML = "$ 0,00"
        total.innerHTML = "$ 0,00"

        const productosCarrito = document.querySelector("tbody tr")
        productosCarrito.remove()

    }
    
}


// /////////////////////////////////////////

const nombre1 = prompt("Ingresa nombre del primer disco")
const precio1 = parseInt(prompt("Ingresa precio del primer disco")) 
const nombre2 = prompt("Ingresa nombre del segundo disco")
const precio2 = parseInt(prompt("Ingresa precio del segundo disco")) 
const nombre3 = prompt("Ingresa nombre del tercer disco")
const precio3 = parseInt(prompt("Ingresa precio del tercer disco")) 

const disco1 = new Disco(nombre1,precio1);
const disco2 = new Disco(nombre2,precio2);
const disco3 = new Disco(nombre3,precio3);

const carrito = new Carrito
carrito.agregarAlCarrito(disco1)
carrito.agregarAlCarrito(disco2)
carrito.agregarAlCarrito(disco3)

alert("EL VALOR TOTAL POR LOS 3 DISCOS ES $" + carrito.valorTotal)


// const calcularEdadPromedio = (aniosTotales , cantPersonas) => aniosTotales / cantPersonas
// let edadIngresada
// let personas = 0
// let anios = 0

// function sumarEdades (anio) {
   
//         anios += anio
//         personas++
    
// }

// while (edadIngresada != "esc") {

//     edadIngresada = prompt("Ingresa una edad")
    
//     if (edadIngresada != "esc") {
        
//         edadNumerica = parseInt(edadIngresada)
//         sumarEdades(edadNumerica)
        
//     }
   
// }

// console.log(anios);
// console.log(personas);


// alert("El promedio de edades es " + calcularEdadPromedio(anios,personas))
