const calcularEdadPromedio = (aniosTotales , cantPersonas) => aniosTotales / cantPersonas
let edadIngresada
let personas = 0
let anios = 0

function sumarEdades (anio) {
   
        anios += anio
        personas++
    
}

while (edadIngresada != "esc") {

    edadIngresada = prompt("Ingresa una edad")
    
    if (edadIngresada != "esc") {
        
        edadNumerica = parseInt(edadIngresada)
        sumarEdades(edadNumerica)
        
    }
   
}

console.log(anios);
console.log(personas);


alert("El promedio de edades es " + calcularEdadPromedio(anios,personas))
