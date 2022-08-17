function numeroAleatorio(){
    min = 0
    max = 10000
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numero = numeroAleatorio()
console.log(numero)