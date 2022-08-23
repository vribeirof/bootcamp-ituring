

function indice(peso, altura){
    let imc = (peso/(altura*altura))
    if (imc < 18.5){
        console.log("Abaixo do Peso")
    }
    else if (imc >= 18,5 && imc < 25){
        console.log("Peso Normal")
    }
    else if(imc >= 25 && imc < 30){
        console.log("Sobrepeso")
    }
    else if (imc >= 30){
        console.log("Obesidade")
    }
}
indice(84, 1.82)
