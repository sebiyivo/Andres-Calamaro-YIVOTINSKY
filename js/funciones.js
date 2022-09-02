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

const consumirApi = async () => {

    const discosCatalogo = document.getElementsByClassName("discoCatalogo")
    let i = 0

    const resp = await fetch("../js/api.json")
    const datos = await resp.json()

    datos.forEach(dato => {
        
        const imagen = dato.imagen
        const titulo = dato.titulo
        const banda = dato.banda
        const precio = dato.precio

        discosCatalogo[i].innerHTML =  `<img src="${imagen}" class="card-img-top" alt="${titulo}" title="${titulo}">
                                        <div class="card-body">
                                          <h5 class="card-title">${titulo}</h5>
                                          <p class="card-text">${banda}</p>
                                          <p class="card-price">$ ${precio}</p>
                                          <input class="btn btn-primary botonAgregar" type="button" value="Agregar al carrito">
                                        </div>`
        
        i++

    });

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