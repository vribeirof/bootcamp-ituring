function filtroDeTermo(lista){
    listaFiltrada = []
    for(let item of lista){
        if(item.includes("Th")){
            listaFiltrada.push(item)
        }
    }
    return listaFiltrada
}
let listaDeSeriesF = filtroDeTermo(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])
console.log(listaDeSeriesF)
