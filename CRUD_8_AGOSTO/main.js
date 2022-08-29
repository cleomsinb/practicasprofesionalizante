function guardar(){

    let nuevo_servidor = {
        direccion:document.getElementById("inp_direccion").value,
        puerto:document.getElementById("inp_puerto").value,
        ciudad:document.getElementById("inp_ciudad").value,
        velocidad:document.getElementById("inp_velocidad").value,
        tipo:document.getElementById("inp_tipo").value

    }

    if("lista_servidores" in localStorage){
       let grilla_servidores=  JSON.parse(localStorage.getItem("lista_servidores"))
        grilla_servidores.push(nuevo_servidor)
        localStorage.setItem("lista_servidores",JSON.stringify(grilla_servidores))
    }else{
        let grilla_servidores = []
        grilla_servidores.push(nuevo_servidor) 
        localStorage.setItem("lista_servidores", JSON.stringify(grilla_servidores) )
    } 
    //llamamos a la funcion para obtener los datos  
    obtener_datos()
}


function obtener_datos(){
    if("lista_servidores" in localStorage){
      let lista_servidores = JSON.parse (localStorage.getItem ("lista_servidores") )

      let filas = []
      lista_servidores.forEach(element => {
        let fila = `
        <tr>
            <td>${element.inp_direccion}</td>
            <td>${element.inp_puerto}</td>
            <td>${element.inp_ciudad}</td>
            <td>${element.inp_velocidad}</td>
            <td>${element.ino_tipo}</td>

        </tr>
        `
        filas.push(fila)
      });
      document.getElementById("tbody").innerHTML = filas.join('')
      }
}
//ejecutamos para obtener la tabla generada desde el principio
obtener_datos()


function eliminar(index){
    let lista_servidores = JSON.parse( localStorage.getItem("lista_servidores"))
    lista_servidores.splice(index,1)
    localStorage.setItem("lista_servidores", JSON.stringify(lista_servidores))
    obtener_datos()
}
