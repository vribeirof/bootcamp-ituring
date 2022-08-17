function calcDesconto(valorReal, percDesconto){
    let valorDesconto = valorReal * percDesconto/100
    let totalMenosDesconto = valorReal - valorDesconto
    return totalMenosDesconto
}
console.log (calcDesconto(500,10))
