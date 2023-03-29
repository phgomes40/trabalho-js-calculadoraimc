function calcularImc() {
    let alt = document.getElementById("altura").value
    let kilos = document.getElementById("peso").value
    let imc = kilos / (alt * alt)

    if(imc<15.99){
        document.getElementById("imc1").innerHTML = imc.toFixed(2) + ` Magreza Grave!`
    }else if(imc>=16 && imc<=16.99){
        document.getElementById("imc1").innerHTML = imc.toFixed(2) + ` Magreza Moderada!`
    }else if(imc >= 17 && imc <= 18.5){
        document.getElementById("imc1").innerHTML = imc.toFixed(2) + ` Magreza Leve!`
    }else if(imc>= 18.5 && imc<=24.99){
        document.getElementById("imc1").innerHTML = imc.toFixed(2) + ` Peso Ideal!`
    }else if(imc>=25 && imc<=29.9){
        document.getElementById("imc1").innerHTML = imc.toFixed(2) + ` Sobrepeso!`
    }else if(imc>=30 && imc<=34.9){
        document.getElementById("imc1").innerHTML = imc.toFixed(2) + ` Obesidade Grau I`
    }else if(imc>=35 && imc<=39.9){
        document.getElementById("imc1").innerHTML = imc.toFixed(2) + ` Obesidade Grau II`
    }else{
        document.getElementById("imc1").innerHTML = imc.toFixed(2) + ` Obesidade Grau III`
    }
}
