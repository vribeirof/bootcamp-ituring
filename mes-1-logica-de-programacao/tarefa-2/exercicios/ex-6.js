/* Contando palavras 
Crie uma função que receba uma frase e retorne o número de palavras dessa frase. 
*/

function contaPalavras(texto){
  const listaPalavras = texto.split(' ')
  return listaPalavras.length

}
let texto = "JavaScript é maravilhoso! e acorda pedrinho que hoje tem campeonato vem dançar comigo "

console.log(contaPalavras(texto))

