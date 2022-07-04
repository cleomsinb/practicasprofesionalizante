async function consumir_datos(){
    //realizo la peticion http a traves del metodo get
    const datos = await fetch('https://jsonplaceholder.typicode.com/users')
//solo conservo los datos en json
    const datos_definitivos = await datos.json()
    datos_definitivos.forEach(element => {
        console.log(element.name)
        
    });
}
//invoco a la funcion
consumir_datos()