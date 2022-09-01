function maiornumero(lista) {
    let tamanho_da_lista = lista.length
    let maior_valor = 0
    for (let contador = 0; contador<tamanho_da_lista; contador++){
        if (lista[contador] > maior_valor){
            maior_valor = lista[contador]
            //console.log("O maior valor atual é" + maior_valor)
        }
        }
        return maior_valor
    }
let lista_de_teste = [1, 10, 15, 2, 30, 0]
let maior = maiornumero(lista_de_teste)
console.log("O maior valor é " +maior)
console.log(maior.length)