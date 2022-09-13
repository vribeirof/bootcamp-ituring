// busca termo com "th metodo filter
let listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
let SerieTh = listaSeries.filter(function(seriado){
    return seriado.includes("Th")

})
console.log(SerieTh)
// jeito 2 de resolver o problema

function buscaTextoEmLista(lista, termoDeBusca){
    let listaFiltrada = lista.filter(function(seriado){
        return seriado.includes(termoDeBusca)
    })
    return listaFiltrada
}
let listafiltrada = buscaTextoEmLista(listaSeries, "Th")
console.log(listafiltrada)