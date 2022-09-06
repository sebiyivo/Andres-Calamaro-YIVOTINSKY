/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// RECUPERAR DATOS DEL LOCAL STORAGE //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const iconoCantidadCarrito = document.getElementById("iconoCantidadCarrito")

if (localStorage.getItem("infoNumeroCarrito")) {

    const memoriaNumeroCarritoDevolver = localStorage.getItem("infoNumeroCarrito")
    iconoCantidadCarrito.innerHTML = memoriaNumeroCarritoDevolver
}

const carrito = document.getElementById("carrito")

if (localStorage.getItem("infoCarrito")) {

    const memoriaCarritoDevolver = localStorage.getItem("infoCarrito")
    carrito.innerHTML = memoriaCarritoDevolver
}
    
const tienda = document.getElementById("tienda")

if (localStorage.getItem("infoTienda")) {

    const memoriaTiendaDevolver = localStorage.getItem("infoTienda")
    tienda.innerHTML = memoriaTiendaDevolver
} else {
    consumirApi()
}
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// AGREGAR AL CARRITO ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

agregarAlCarrito()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// VACIAR CARRITO ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const vaciarCarritoBoton = document.getElementById("vaciarCarrito")

vaciarCarritoBoton.onclick = () => {

    Swal.fire({
        background: '#373737',
        color: '#ffffff',
        title: '¿Esta seguro que desea vaciar el carrito?',
        icon: 'warning',
        iconColor: '#ff0000',
        showCancelButton: true,
        confirmButtonColor: '#00b400',
        cancelButtonColor: '#ff0000af',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Confirmar'
      }).then((result) => {

        if (result.isConfirmed) {
          Swal.fire({
            background: '#373737',
            color: '#ffffff',
            icon: 'success',
            iconColor: '#11cf00',
            title: 'Vaciado!',
            text: "El carrito ha sido limpiado",
            confirmButtonColor: '#11cf00',
            },
            'success'
          )  

        vaciarCarrito()
        }
      })       
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// REGENERAR HANDLERS ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const generarHandlers = () => {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// ELIMINAR PRODUCTO ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const botonesEliminar = document.getElementsByClassName("botonEliminar")

for (let i = 0; i < botonesEliminar.length; i++) {
   
    const boton = botonesEliminar[i];

    boton.onclick = () => {
        
        Swal.fire({
            background: '#373737',
            color: '#ffffff',
            title: '¿Esta seguro que desea eliminar el producto?',
            icon: 'warning',
            iconColor: '#ff0000',
            showCancelButton: true,
            confirmButtonColor: '#00b400',
            cancelButtonColor: '#ff0000af',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminarlo'
          }).then((result) => {

            if (result.isConfirmed) {
              Swal.fire({
                background: '#373737',
                color: '#ffffff',
                icon: 'success',
                iconColor: '#11cf00',
                title: 'Eliminado!',
                text: "El disco ha sido eliminado del carrito",
                confirmButtonColor: '#11cf00',
                },
                'success'
              )

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
            calcularTotal()
            
            /////////// MODIFICAR NUMERO CARRITO /////////////
            
            let cantidadBoton = boton.parentElement.previousElementSibling.previousElementSibling.firstChild.value
            let numeroCarrito = parseInt(iconoCantidadCarrito.innerHTML) - cantidadBoton
            iconoCantidadCarrito.innerHTML = numeroCarrito
            
            guardarLocalNumeroCarrito(numeroCarrito)
            
            guardarLocalTienda(tienda.innerHTML)
            guardarLocalCarrito(carrito.innerHTML)
            
            generarHandlers()                
            
            }
        })
    
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// MODIFICAR CANTIDAD ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cantidadesCarrito = document.getElementsByClassName("cantidad")

for (let i = 0; i < cantidadesCarrito.length; i++) {

    const cantidad = cantidadesCarrito[i];
    const precioCorrespondiente = convertirANumero(cantidad.parentElement.previousElementSibling.innerHTML)

    cantidad.oninput = (e) => {

        const cantidadNumero = cantidadesCarrito[i].value
        const nuevoTotal = cantidadNumero * precioCorrespondiente

        cantidad.setAttribute("value", e.target.value)
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

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// COMPRAR //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const comprar = document.getElementById("comprar")
const confirmar = document.getElementById("confirmar")
const datosCompra = document.getElementsByClassName("datoCompra")

const nombreCompra = document.getElementById("nombreCompra")
const apellidoCompra = document.getElementById("apellidoCompra")
const dniCompra = document.getElementById("dniCompra")
const mailCompra = document.getElementById("mailCompra")

confirmar.onclick = () => {

    ///// VERIFICAR SI COMPLETO TODOS LOS DATOS ///// 
    if (nombreCompra.value.length == 0 || apellidoCompra.value.length == 0 || dniCompra.value.length == 0 || mailCompra.value.length == 0) {

        Swal.fire({
            background: '#373737',
            color: '#ffffff',
            position: 'center',
            icon: 'warning',
            iconColor: '#ff0000',
            title: 'Complete todos los datos antes de finalizar la compra',
            showConfirmButton: false,
            timer: 2000
          })

    ///// CONFIRMAR Y FINALIZAR LA COMPRA, VACIANDO EL CARRITO Y LIMPIANDO LOS CAMPOS /////     
    } else {

        for (let i = 0; i < datosCompra.length; i++) {
            const datoCompra = datosCompra[i];
            datoCompra.value = "" 
        }
    
        vaciarCarrito()
    
        Swal.fire({
            background: '#373737',
            color: '#ffffff',
            icon: 'success',
            iconColor: '#11cf00',
            title: 'Felicidades!',
            text: "Su compra ha sido realizada con exito!",
            confirmButtonColor: '#11cf00',
            },
            'success'
        )
        
    }

}

generarHandlers()
calcularTotal()

