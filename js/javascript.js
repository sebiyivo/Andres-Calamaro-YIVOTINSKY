class Disco {
    constructor(imagen, nombre, precio) {
        this.imagen = imagen
        this.nombre = nombre
        this.precio = precio
  
    }

}

// const discos = []
// const agregarAlArray = () => {

//     const imagenDisco = document.getElementsByClassName("card-img-top")
//     const nombreDisco = document.getElementsByClassName("card-img-top".title)
//     const precioDisco = document.getElementsByClassName("card-price")

//    while (imagen != "") {
//      let i = 0
     
//      if (imagen != "") {
//         const imagen = imagenDisco[i].src
//     const nombre = imagenDisco[i].title
//     const precio = precioDisco[i]

//     discos.push(new Disco(imagen,nombre,precio)) 

//      i++

//      }
    
//    }

// }

// agregarAlArray()
// console.log(discos);


const botonesAgregar = document.getElementsByClassName("botonAgregar")
const iconoCantidadCarrito = document.getElementById("iconoCantidadCarrito")

for (let i = 0; i < botonesAgregar.length; i++) {
   
    const boton = botonesAgregar[i];

    boton.onclick = () => {
        boton.value = "AGREGADO"
        boton.className += " botonAgregado"
        let numeroCarrito = parseInt(iconoCantidadCarrito.innerHTML) + 1
        iconoCantidadCarrito.innerHTML = numeroCarrito
    }

}



class Carrito {
    constructor() {
        this.valorTotal = 0
        this.cantidadItems = 0
        this.discos = []
    }

    agregarAlCarrito_ (Disco) {
 
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

// const nombre1 = prompt("Ingresa nombre del primer disco")
// const precio1 = parseInt(prompt("Ingresa precio del primer disco")) 
// const nombre2 = prompt("Ingresa nombre del segundo disco")
// const precio2 = parseInt(prompt("Ingresa precio del segundo disco")) 
// const nombre3 = prompt("Ingresa nombre del tercer disco")
// const precio3 = parseInt(prompt("Ingresa precio del tercer disco")) 

// const disco1 = new Disco(nombre1,precio1);
// const disco2 = new Disco(nombre2,precio2);
// const disco3 = new Disco(nombre3,precio3);

// const carrito = new Carrito
// carrito.agregarAlCarrito(disco1)
// carrito.agregarAlCarrito(disco2)
// carrito.agregarAlCarrito(disco3)

// alert("EL VALOR TOTAL POR LOS 3 DISCOS ES $" + carrito.valorTotal)



