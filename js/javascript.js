class Disco {
    constructor(imagen, nombre, precio) {
        this.imagen = imagen
        this.nombre = nombre
        this.precio = precio
  
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

        if (boton.value == "Agregar al carrito") {
            let numeroCarrito = parseInt(iconoCantidadCarrito.innerHTML) + 1
            iconoCantidadCarrito.innerHTML = numeroCarrito
        }
        
        boton.value = "AGREGADO"
        boton.className += " botonAgregado"
        
       
    }

}







