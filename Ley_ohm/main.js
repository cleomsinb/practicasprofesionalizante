function sumar (tension,resistencia) {
    const resultado = parseInt(tension) / parseInt(resistencia)
    return resultado
}
    function recolectar_ohm(){
        const tension= document .getElementById("input_d1").value 
        const resistencia= document .getElementById("input_d2").value
    }
    //llamar a la funcion
        const respuesta = sumar(tension,resistencia)
        document.getElementById("resultado").textContent=respuesta