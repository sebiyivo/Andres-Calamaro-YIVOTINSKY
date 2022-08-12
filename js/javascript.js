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

    
}


/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////////////////// 

/////////// AGREGAR AL CARRITO /////////////

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

/////////// VACIAR CARRITO /////////////

const productosCarrito = document.getElementsByClassName("productoEnCarrito")
const vaciarCarrito = document.getElementById("vaciarCarrito")

const subtotal = document.getElementById("subtotal")
const iva = document.getElementById("iva")
const total = document.getElementById("total")

vaciarCarrito.onclick = () => {

    while (productosCarrito.length != 0) {
       
         productosCarrito[0].remove()
    }

    subtotal.innerHTML = "$ 0,00"
    iva.innerHTML = "$ 0,00"
    total.innerHTML = "$ 0,00"

    iconoCantidadCarrito.innerHTML = 0

}

/////////// ELIMINAR PRODUCTO /////////////

const botonesEliminar = document.getElementsByClassName("botonEliminar")

for (let i = 0; i < botonesEliminar.length; i++) {
   
    const boton = botonesEliminar[i];

    boton.onclick = () => {
        
       boton.parentElement.parentElement.remove()

       let numeroCarrito = parseInt(iconoCantidadCarrito.innerHTML) - 1
       iconoCantidadCarrito.innerHTML = numeroCarrito
       
    }

}

