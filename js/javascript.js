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

const convertirANumero = (precio) => parseFloat(precio.slice(2))
const convertirAPrecio = (numero) => "$ " + numero

/////////// AGREGAR AL CARRITO /////////////

const carrito = document.getElementById("carrito")
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

        carrito.innerHTML +=  `<tr class="productoEnCarrito">
                                  <th scope="row"><${boton.parentElement.previousElementSibling}></th>
                                  <td class="tituloCarrito">${boton.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML}</td>
                                  <td class="precioCarrito">${boton.previousElementSibling.innerHTML}</td>
                                  <td><input class="cantidad" type="number" value="1" min="1" max="99"></td>
                                  <td class="precioTotalCarrito">${boton.previousElementSibling.innerHTML}</td>
                                  <td><input class="btn botonEliminar" type="button" value="Eliminar" ></td>
                                </tr>` 
          
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

    subtotal.innerHTML = "$ 0.00"
    iva.innerHTML = "$ 0.00"
    total.innerHTML = "$ 0.00"

    iconoCantidadCarrito.innerHTML = 0

}

/////////// ELIMINAR PRODUCTO /////////////

const botonesEliminar = document.getElementsByClassName("botonEliminar")

for (let i = 0; i < botonesEliminar.length; i++) {
   
    const boton = botonesEliminar[i];

    boton.onclick = () => {


       const totalProducto = convertirANumero(boton.parentElement.previousElementSibling.innerHTML) 
       console.log(totalProducto);
       subtotalActual = convertirANumero(subtotal.innerHTML)
       subtotalNuevo = subtotalActual - totalProducto
       ivaNuevo = subtotalNuevo * 0.21
       totalNuevo = subtotalNuevo * 1.21
       subtotal.innerHTML = convertirAPrecio(subtotalNuevo) 
       iva.innerHTML = convertirAPrecio(ivaNuevo) 
       total.innerHTML = convertirAPrecio(totalNuevo) 


       boton.parentElement.parentElement.remove()

       let numeroCarrito = parseInt(iconoCantidadCarrito.innerHTML) - 1
       iconoCantidadCarrito.innerHTML = numeroCarrito
       
    }

}

/////////// MODIFICAR CANTIDAD /////////////

const cantidadesCarrito = document.getElementsByClassName("cantidad")

for (let i = 0; i < cantidadesCarrito.length; i++) {

    const cantidad = cantidadesCarrito[i];
    const precioCorrespondiente = convertirANumero(cantidad.parentElement.previousElementSibling.innerHTML)
    

    cantidad.oninput = () => {

        const cantidadNumero = cantidadesCarrito[i].value
        const nuevoTotal = cantidadNumero * precioCorrespondiente

        cantidad.parentElement.nextElementSibling.innerHTML = convertirAPrecio(nuevoTotal)

    }
    
}

/////////// CALCULAR TOTAL /////////////

const totalesCarrito = document.getElementsByClassName("precioTotalCarrito")
let acumSubtotal = 0

for (let i = 0; i < totalesCarrito.length; i++) {

    const total = totalesCarrito[i].innerHTML;

    acumSubtotal += convertirANumero(total)

}

subtotal.innerHTML = convertirAPrecio(acumSubtotal)
iva.innerHTML = convertirAPrecio(acumSubtotal * 0.21)
total.innerHTML = convertirAPrecio(acumSubtotal * 1.21)