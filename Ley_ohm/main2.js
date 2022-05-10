//funciones tradionales
function calcular()
{
    const d1 = document.getElementById("inp_dato1").value
    const d2=document.getElementById("inp_dato2").value

     const operacion = document.getElementById("slt_operacion").value
    let resultado = null
    if ( operacion == 0 ){
        //Calcular corriente
        resultado = d1/d2
    }else{
        if( operacion == 1){
            //Calcular tension
            resultado = d1 * d2
        }else{
            //Calcular resistencia
            resultado = d1/d2
        }

    }
    
    document.getElementById("h_resultado").textContent = 'resultado = '+resultado.toFixed(2)
}

function setearLabel()
{
    const lbl1 = document.getElementById("lbl_dato1")
    const lbl2 =  document.getElementById("lbl_dato2")
    const operacion = document.getElementById("slt_operacion").value
    if (operacion==0)
    {
        lbl1.textContent = 'Tension'
        lbl2.textContent = 'Resistencia'
    }else{
        if(operacion==1){

       
            lbl1.textContent = 'Corriente'
            lbl2.textContent = 'Resistencia'
    }else{
        lbl1.textContent= 'Tension'
        lbl2.textContent= 'Corriente'
     }
    }
}
