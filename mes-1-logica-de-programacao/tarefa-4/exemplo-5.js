let idadeInscritos = [10, 12, 15, 18, 21, 30, 40, 32, 20]
//ver a lista de idades
// uma outra LISTA  só com os maiores de 18 anos
// jeito facil de corrigir a lista
function mexerComidade(lista, maiorDe, corretor){
 lista.forEach(function(idade){
    console.log(idade)
 })
 console.log("Lista maiores de 18 anos")
 let maiorDe18 = lista.filter(function(idade){
    return idade > maiorDe
 })
 console.log(`Lista de Maiores de anos: ${maiorDe18}`)

 let listaCorrigida = lista.map(function(idade){
    return idade + corretor
 })
 console.log(`lista corrigida : ${listaCorrigida}`)
 return ""
}
console.log(mexerComidade(idadeInscritos, 18, -3))