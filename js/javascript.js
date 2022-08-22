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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const iconoCantidadCarrito = document.getElementById("iconoCantidadCarrito")

if (localStorage.getItem("infoNumeroCarrito")) {

    const memoriaNumeroCarritoDevolver = localStorage.getItem("infoNumeroCarrito")
    iconoCantidadCarrito.innerHTML = memoriaNumeroCarritoDevolver
}

const carrito = document.getElementById("carrito")

if (localStorage.getItem("infoCarrito")) {

    const memoriaCarritoString = localStorage.getItem("infoCarrito")
    const memoriaCarritoDevolver = JSON.parse(memoriaCarritoString)
    carrito.innerHTML = memoriaCarritoDevolver
}
    
const tienda = document.getElementById("tienda")

if (localStorage.getItem("infoTienda")) {

    const memoriaTiendaString = localStorage.getItem("infoTienda")
    const memoriaTiendaDevolver = JSON.parse(memoriaTiendaString)
    tienda.innerHTML = memoriaTiendaDevolver
}
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// FUNCIONES ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const convertirANumero = (precio) => parseFloat(precio.slice(2))
const convertirAPrecio = (numero) => "$ " + numero
///////////////////////////////////////////////////////////////////////////////////
const guardarLocalNumeroCarrito = (numeroGuardar) => {
    const memoriaNumeroCarrito = numeroGuardar
        localStorage.setItem("infoNumeroCarrito" , memoriaNumeroCarrito)
}    

const guardarLocalCarrito = (htmlCarritoGuardar) => {

    // carrito.innerHTML 
    const memoriaCarrito = JSON.stringify(htmlCarritoGuardar) 
    localStorage.setItem("infoCarrito", memoriaCarrito)
}

const guardarLocalTienda = (htmlTiendaGuardar) => {

    // tienda.innerHTML 
    const memoriaTienda = JSON.stringify(htmlTiendaGuardar) 
    localStorage.setItem("infoTienda", memoriaTienda)
}
///////////////////////////////////////////////////////////////////////////////////
const calcularTotal = () => {

    const totalesCarrito = document.getElementsByClassName("precioTotalCarrito")
    let acumSubtotal = 0
    
    for (let i = 0; i < totalesCarrito.length; i++) {
    
        const total = totalesCarrito[i].innerHTML;
    
        acumSubtotal += convertirANumero(total)
    
    }
    
    subtotal.innerHTML = convertirAPrecio(acumSubtotal)
    iva.innerHTML = convertirAPrecio(acumSubtotal * 0.21)
    total.innerHTML = convertirAPrecio(acumSubtotal * 1.21)
}
///////////////////////////////////////////////////////////////////////////////////
const productosCarrito = document.getElementsByClassName("productoEnCarrito")

const subtotal = document.getElementById("subtotal")
const iva = document.getElementById("iva")
const total = document.getElementById("total")

const vaciarCarrito = () => {

    while (productosCarrito.length != 0) {
       
         productosCarrito[0].remove()
    }

//// RESTAURAR BOTONES AGREGADO //// 

    for (let i = 0; i < botonesAgregar.length; i++) {
    
        const botonAgregar = botonesAgregar[i];
  
        botonAgregar.value = "Agregar al carrito"
        botonAgregar.className = "btn btn-primary botonAgregar" 
                
        }   

    subtotal.innerHTML = "$ 0"
    iva.innerHTML = "$ 0"
    total.innerHTML = "$ 0"

    iconoCantidadCarrito.innerHTML = 0

    guardarLocalNumeroCarrito(0)
    guardarLocalTienda(tienda.innerHTML)
    guardarLocalCarrito(carrito.innerHTML)

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// AGREGAR AL CARRITO ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const botonesAgregar = document.getElementsByClassName("botonAgregar")

for (let i = 0; i < botonesAgregar.length; i++) {
   
    const boton = botonesAgregar[i];

    boton.onclick = () => {

        if (boton.value == "Agregar al carrito") {
            let numeroCarrito = parseInt(iconoCantidadCarrito.innerHTML) + 1
            iconoCantidadCarrito.innerHTML = numeroCarrito

            guardarLocalNumeroCarrito(numeroCarrito)
        
            boton.value = "AGREGADO"
            boton.className += " botonAgregado"

            carrito.innerHTML +=  `<tr class="productoEnCarrito">
                                      <th scope="row"><img src="${boton.parentElement.previousElementSibling.src}" alt="${boton.parentElement.previousElementSibling.alt}" title="${boton.parentElement.previousElementSibling.title}"></th>
                                      <td class="tituloCarrito">${boton.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML}</td>
                                      <td class="precioCarrito">${boton.previousElementSibling.innerHTML}</td>
                                      <td><input class="cantidad" type="number" value="1" min="1" max="99"></td>
                                      <td class="precioTotalCarrito">${boton.previousElementSibling.innerHTML}</td>
                                      <td><input class="btn botonEliminar" type="button" value="Eliminar" ></td>
                                    </tr>` 

            calcularTotal()

            guardarLocalTienda(tienda.innerHTML)
            guardarLocalCarrito(carrito.innerHTML)
        }  
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// VACIAR CARRITO ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const vaciarCarritoBoton = document.getElementById("vaciarCarrito")


vaciarCarritoBoton.onclick = () => {

  vaciarCarrito()

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// ELIMINAR PRODUCTO ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const botonesEliminar = document.getElementsByClassName("botonEliminar")

for (let i = 0; i < botonesEliminar.length; i++) {
   
    const boton = botonesEliminar[i];

    boton.onclick = () => {

//// RESTAURAR BOTON AGREGADO //// 

        for (let i = 0; i < botonesAgregar.length; i++) {
   
            const botonAgregar = botonesAgregar[i];
        
                if (boton.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML == botonAgregar.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML) {
                    
                    botonAgregar.value = "Agregar al carrito"
                    botonAgregar.className = "btn btn-primary botonAgregar" 
                }      
                
            }
        
/////////// MODIFICAR TOTAL Y BORRAR LINEA /////////////

        const totalProducto = convertirANumero(boton.parentElement.previousElementSibling.innerHTML) 
        subtotalActual = convertirANumero(subtotal.innerHTML)

        subtotalNuevo = subtotalActual - totalProducto
        ivaNuevo = subtotalNuevo * 0.21
        totalNuevo = subtotalNuevo * 1.21
            
        subtotal.innerHTML = convertirAPrecio(subtotalNuevo) 
        iva.innerHTML = convertirAPrecio(ivaNuevo) 
        total.innerHTML = convertirAPrecio(totalNuevo) 


        boton.parentElement.parentElement.remove()

/////////// MODIFICAR NUMERO CARRITO /////////////
       
        let cantidadBoton = boton.parentElement.previousElementSibling.previousElementSibling.firstChild.value
        let numeroCarrito = parseInt(iconoCantidadCarrito.innerHTML) - cantidadBoton
        iconoCantidadCarrito.innerHTML = numeroCarrito

        guardarLocalNumeroCarrito(numeroCarrito)
       

        guardarLocalTienda(tienda.innerHTML)
        guardarLocalCarrito(carrito.innerHTML)

        location.reload()
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// MODIFICAR CANTIDAD ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cantidadesCarrito = document.getElementsByClassName("cantidad")

for (let i = 0; i < cantidadesCarrito.length; i++) {

    const cantidad = cantidadesCarrito[i];
    const precioCorrespondiente = convertirANumero(cantidad.parentElement.previousElementSibling.innerHTML)

    cantidad.oninput = () => {

        const cantidadNumero = cantidadesCarrito[i].value
        const nuevoTotal = cantidadNumero * precioCorrespondiente

        cantidad.parentElement.nextElementSibling.innerHTML = convertirAPrecio(nuevoTotal)

/////////// MODIFICAR TOTAL /////////////

calcularTotal()

/////////// MODIFICAR NUMERO CARRITO /////////////

        let acumTotalCantidades = 0

        for (let i = 0; i < cantidadesCarrito.length; i++) {
        
            const cant = cantidadesCarrito[i].value;
        
            acumTotalCantidades += parseInt(cant)
        
        }

        iconoCantidadCarrito.innerHTML = acumTotalCantidades

        guardarLocalNumeroCarrito(acumTotalCantidades)

        guardarLocalTienda(tienda.innerHTML)
        guardarLocalCarrito(carrito.innerHTML)
    }
    
}

calcularTotal()



