function guardar(){

    let nuevo_servidor = {
        direccion:document.getElementById("inp_direccion").value,
        puerto:document.getElementById("inp_puerto").value,
        ciudad:document.getElementById("inp_ciudad").value,
        velocidad:document.getElementById("inp_velocidad").value,
        tipo:document.getElementById("inp_tipo").value

    }

    if("lista_servidores" in localStorage){
       let grilla_servidores = JSON.parse(localStorage.getItem("lista_servidores"))
        grilla_servidores.push(nuevo_servidor)
        localStorage.setItem("lista_servidores",JSON.stringify(grilla_servidores))
    }else{
        let grilla_servidores = []
        grilla_servidores.push(nuevo_servidor) 
        localStorage.setItem("lista_servidores", JSON.stringify(grilla_servidores) )
    } 
    //llamamos a la funcion para obtener los datos 
    document.getElementById("form_servidores").reset() 
    obtener_datos()
}


function obtener_datos(){
    if("lista_servidores" in localStorage){
      let lista_servidores = JSON.parse (localStorage.getItem ("lista_servidores") )

      let filas = []
      lista_servidores.forEach( (element,index) => {
        let fila = `
        <tr>
            <td>${index+1}</td>
            <td>${element.direccion}</td>
            <td>${element.puerto}</td>
            <td>${element.ciudad}</td>
            <td>${element.velocidad}</td>
            <td>${element.tipo}</td>
            <td>
                <button onclick="eliminar(${index})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
            </td>


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
   let lista_servidores = JSON.parse(localStorage.getItem("lista_servidores"))
   lista_servidores.splice(index,1)

   localStorage.setItem("lista_servidores", JSON.stringify(lista_servidores))
   
   obtener_datos()
}


function editar(index){
    let lista_servidores = JSON.parse(localStorage.getItem("lista_servidores"))
    document.getElementById("inp_direccion").value = lista_servidores[index].direccion
    document.getElementById("inp_puerto").value = lista_servidores[index].puerto
    document.getElementById("inp_ciudad").value = lista_servidores[index].ciudad
    document.getElementById("inp_velocidad").value = lista_servidores[index].velocidad
    document.getElementById("inp_tipo").value = lista_servidores[index].tipo

    document.getElementById("btn_guardar").style.display ='none'
    document.getElementById("btn_actualizar").style.display = 'block'

    localStorage.setItem("indice_servidores", index)
}

function actualizar(){
    let indice = localStorage.getItem("indice_servidores")
    
    let lista_servidores = JSON.parse(localStorage.getItem("lista_servidores"))

    lista_servidores[indice].direccion = document.getElementById("inp_direccion").value
    lista_servidores[indice].puerto = document.getElementById("inp_puerto").value
    lista_servidores[indice].ciudad = document.getElementById("inp_ciudad").value
    lista_servidores[indice].velocidad = document.getElementById("inp_velocidad").value
    lista_servidores[indice].tipo = document.getElementById("inp_tipo").value
    
    
    localStorage.setItem("lista_servidores", JSON.stringify(lista_servidores))

    obtener_datos()

    document.getElementById("btn_guardar").style.display ='none'
    document.getElementById("btn_actualiar").style.display = 'block'

    document.getElementById("form_servidores").reset() 

}

document.getElementById("btn_actualizar").addEventListener("click", actualizar)