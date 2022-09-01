function tamanho(){
    let lista = ["a", "b", "c", "d"]
    console.log(lista)
    console.log(`o tamanho da lista é ${lista.length}`)

}
tamanho()

function menorDaLista(lista){
    let menor_valor = lista[0]
    for(let item of lista){
        console.log(`Esse é o numero atual do For ${numero}`)
        console.log(`Esse é o menor valor atual ${menor_valor}`)
        console.log("____________________")
        return menor_valor
    }
}
    let menor = menorDaLista([-1, -10, -10, -15,-2,-30])
    console.log(menor)