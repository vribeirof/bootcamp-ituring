let lista = [4, 9, 16, 25, 36, 49]
let retornoRaiz = lista.map(function(raiz){
    let quadrado = Math.sqrt(raiz)
    return quadrado
})
console.log(retornoRaiz)