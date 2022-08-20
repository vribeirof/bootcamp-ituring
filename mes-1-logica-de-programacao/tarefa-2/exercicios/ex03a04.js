/* criação de um jogo, que a partir de uma função o computador gera um numero aleatorio de 1 a 6 
o jogador escolhe um numero, caso esse seja igual ao numero gerado
jogador ganha*/
function jogar(numero){
    const numeroSorteado = Math.floor(Math.random() *6) + 1;
    console.log(numeroSorteado)
    if (numero == numeroSorteado){
    console.log("Você ganhou!")
    }
    else{
    console.log("Você Perdeu!Tente novamente")
    }
}
jogar(2)



