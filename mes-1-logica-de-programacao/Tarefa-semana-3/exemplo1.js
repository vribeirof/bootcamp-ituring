console.log ("hello world")
function numero1a10(){
    let numero = 1
    while(numero <= 10){
        console.log(numero)
    numero += 1
    }
}
numero1a10()


function numero1aN(n){
    let i = 1
    while (i <= n){
        console.log(i)
        i = i + 1
    }
}
numero1aN(20)
/* informando numeros pares a partir de um paramentro no contador */
function numero1aJpar(j){
    let i = 1
    while (i <= j){
        if(i%2 == 0){
            console.log(i)
            i += 1
        }
        else{
            i += 1
        }

    }
}
numero1aJpar(20)