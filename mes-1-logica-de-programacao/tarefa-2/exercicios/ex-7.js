/* Função que extrai as iniciais do nome, no caso do exemplo
o primeiro e o ultimo nome com letras maiusculas*/
function extrairIniciais(nomeCompleto){
  const listaNomes = nomeCompleto.split(' ')
  const primeiroNome = listaNomes[0]
  const posicaoUltimoNome = listaNomes.lenght - 1
  const ultimoNome = listaNomes[posicaoUltimoNome]

  const letraPrimeiroNome = primeiroNome.charAt(0)
  const letraUltimoNome = ultimoNome.charAt(0)
  

  console.log(letraPrimeiroNome,letraUltimoNome)
 

 
}
console.log(extrairIniciais("Vitor Ribeiro de França"))
console.log(extrairIniciais("Ana Maria da Silva"))
