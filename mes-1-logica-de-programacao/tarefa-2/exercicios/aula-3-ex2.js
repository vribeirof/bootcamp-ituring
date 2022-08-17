/*vamos criar uma função para gerar um numero inteiro aleatório,
toda vez que rodar a funçao ela irá retornar um numero aleatório de 0 a 10 */
function gerarNumeroAleatorio() {
    min = 0
    max = 100
    return Math.floor(Math.random() * (max - min + 1)) + min;
   
  }
let numero = gerarNumeroAleatorio()
console.log(numero)
