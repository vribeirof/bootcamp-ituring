/* função que calcula valor do produto com desconto, ou seja, ela recebe o valor do produto e calcula o descont*/
function calcularDesconto(valorProduto, desconto){
    let valorDesconto = valorProduto * desconto/100;
    let totalMenosDesconto = valorProduto - valorDesconto;
    return totalMenosDesconto;
    
}
console.log(calcularDesconto(100, 5))
console.log(calcularDesconto(100, 30))
console.log(calcularDesconto(100, 60))

