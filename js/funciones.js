//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// FUNCIONES REUTILIZABLES ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const convertirANumero = (precio) => parseFloat(precio.slice(2))
const convertirAPrecio = (numero) => "$ " + numero

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const guardarLocalNumeroCarrito = (numeroGuardar) => {
    const memoriaNumeroCarrito = numeroGuardar
        localStorage.setItem("infoNumeroCarrito" , memoriaNumeroCarrito)
}    

const guardarLocalCarrito = (htmlCarritoGuardar) => {

    const memoriaCarrito = htmlCarritoGuardar
    localStorage.setItem("infoCarrito", memoriaCarrito)
}

const guardarLocalTienda = (htmlTiendaGuardar) => {

    const memoriaTienda = htmlTiendaGuardar
    localStorage.setItem("infoTienda", memoriaTienda)
}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const subtotal = document.getElementById("subtotal")
const iva = document.getElementById("iva")
const total = document.getElementById("total")

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

    //// DESHABILITAR BOTON COMPRAR SI EL CARRITO ESTA VACIO//// 

    total.innerHTML == "$ 0" ? comprar.disabled = true : comprar.disabled = false

}

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const productosCarrito = document.getElementsByClassName("productoEnCarrito")

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

    calcularTotal()

    iconoCantidadCarrito.innerHTML = 0

    guardarLocalNumeroCarrito(0)
    guardarLocalTienda(tienda.innerHTML)
    guardarLocalCarrito(carrito.innerHTML)

}