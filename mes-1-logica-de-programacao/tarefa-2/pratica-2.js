function nomeCliente(nomeComprador){
    console.log (`Olá, ${nomeComprador}!`)
}
nomeCliente('Vitor Ribeiro')
function mensagem(nomeDoProduto,nomeDoRecebedor,EnderecoDeEntrega){
    console.log(`Fizemos a entrega do produto ${nomeDoProduto} no endereço ${EnderecoDeEntrega} com sucesso!

    O seu produto foi recebido por: ${nomeDoRecebedor}
    
    Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`)
}
mensagem(`mouse`,`Gabriel`,`Rua das Oliveiras`)
function conclusão(remetente){
    console.log(`Atenciosamente,
                ${remetente}`)
}
conclusão(`Abelardo Barbosa`)