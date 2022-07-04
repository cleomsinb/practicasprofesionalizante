function guardar(){

        const nombre = document.getElementById("inp_nombre").value
        const apellido = document.getElementById("inp_apellido").value
        const dni = document.getElementById("inp_dni").value 

        let nuevo_cliente = {
            nombre:nom,
            apellido:ape,
            dni:dni,
        }


    if("clientes" in localStorage){
        let grilla_cliente = JSON.parse(localStorage.getItem("lista_clientes"))
        grilla_cliente.push(nuevo_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_cliente))
    }else{
        let grilla_cliente = []
        grilla_cliente.push(nuevo_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_cliente)
    }
}
//function auxiliar ()
//{
  //  const datos = localStorage.getItem("clientes")
    //console.log(datos)
//}