let listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
let SerieTh = listaSeries.filter(function(seriado){
    return seriado.includes("Th")

})
console.log(SerieTh)