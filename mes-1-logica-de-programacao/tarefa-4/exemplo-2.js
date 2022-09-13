//método filter
let listaDeNomes = ["Thales", "Tiago", "Helena"]
let nomeMaisQueCinco = listaDeNomes.filter(function(nome){
    //toda vez que retornar true ele filtra
    // toda vez que retornar false ele descarta
 return nome.length > 5
    
 } 
)
console.log(nomeMaisQueCinco)