// metodo .map
let lista = ["Pedro", "Vitor", "Gabriel"]
//let retornoDoForEach = lista.forEach(function(nome){
  //  return `Olá, ${nome}`
//})
//console.log(retornoDoForEach)


let retornolista = lista.map(function(nome){
    let cumprimento = `Olá, ${nome}`
    return cumprimento
})
console.table(retornolista)
// utilizando condicionais
let retornolista2 = lista.map(function(nome){
    if (nome.length > 5){
        return nome 
    }
})
console.table(retornolista2)