class Disco {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase()
        this.precio = precioConIva()
        this.vendido = false
    }

    precioConIva() {
        let precioConIva = parseFloat(precio) * 1.21
        return precioConIva
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
    
}



























































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
