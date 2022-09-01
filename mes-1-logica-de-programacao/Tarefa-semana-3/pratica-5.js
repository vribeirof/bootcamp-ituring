function buscaSerie (lista, busca) {
        

    if (lista.includes(busca)){
    
        console.log(lista.indexOf(busca))
    } else {
        console.log(undefined)
    }

}

 
let listaS = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
let seriE = ("Stranger Things")
buscaSerie(listaS, seriE)


