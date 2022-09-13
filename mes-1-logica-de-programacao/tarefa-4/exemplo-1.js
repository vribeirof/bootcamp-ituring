let listaDeNomes = ["Thales", "Tiago", "Helena"]
listaDeNomes.forEach(function(nome){
    console.log(`Olá, ${nome}`)
})

console.log("\n Usando for loop\ \n")

for(let nome of listaDeNomes){
    console.log(`Olá ${nome}`)
}
