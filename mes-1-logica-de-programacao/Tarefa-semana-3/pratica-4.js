function geradorDeListaSeries(lista){
    for(i = 0; i < lista.length; i++){
        console.log([i] + " - " + lista[i])
    }
}
listaS = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
  geradorDeListaSeries(listaS)  
    