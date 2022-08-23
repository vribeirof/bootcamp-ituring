function data(numero){
    if(numero === 1){
        console.log("01 : Segunda")
    }
    else if(numero === 2){
        console.log("01 : Terça")
    }
    else if(numero === 3){
        console.log("01 : Quarta")
    }
    else if(numero === 4){
        console.log("01 : Quinta")
    }
    else if(numero === 5){
        console.log("01 : Sexta")
    }
    else if(numero === 6){
        console.log("01 : Sabado")
    }
    else if(numero === 7){
        console.log("01 : Domingo")
    }
    else{
        console.log(`O número ${numero} não é válido para dia de semana`)
    }
}
data(9)