function filtroDePares(lista){
    let listaDePar = []
    for (let aluno of lista){
        if(aluno % 2 === 0){
            listaDePar.push(aluno)
        }
    }
    return listaDePar
}
let listaFiltrada = filtroDePares([1,2,3,4,5,6,7,8,9,10,11,12,13])
console.table(listaFiltrada)
