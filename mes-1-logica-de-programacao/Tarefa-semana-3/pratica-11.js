let ordenaListaDeNumeros = lista => {
    for (let i = 0; i < lista.length; i++) {
        let indiceMenorAtual = i

        for (let j = i+1; j < lista.length; j++)
            if (lista[j] < lista[indiceMenorAtual]) {
                indiceMenorAtual = j
            }

    
        const aux = lista[i]
        lista[i] = lista[indiceMenorAtual]
        lista[indiceMenorAtual] = aux
    }

    return lista
        
    }
    let lista = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]

console.log(ordenaListaDeNumeros(lista))
