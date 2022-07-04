async function dolar_hoy(){

    const dolar = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const datos = await dolar.json()

    let filas = []
    
    datos.forEach((element, index) => {      
        //console.log(`
        //    ${element.casa.nombre} - Compra: ${element.casa.compra} - Venta:  ${element.casa.venta}
        //`)     

        //enganiamos a HTML para escribir codigo HTML y poder hacer que se actualize todo el tiempo la tabla
        let fila = `
            <tr>
                <td>${index+1}</td>
                <td>${element.casa.nombre}</td>
                <td>$${element.casa.compra}</td>
                <td>$${element.casa.venta}</td>
    
            </tr>
        `
        filas.push(fila)
    });
//busca el elemento que se creo en tbody por id y copia todo como si fuera html sacando las comillas invertidas
    document.getElementById("tbody").innerHTML = filas.join('')
}
dolar_hoy()

//Comento el console log por el ejercico que tamos viendo