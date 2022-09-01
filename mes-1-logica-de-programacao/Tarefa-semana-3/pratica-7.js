function saldoConta(extrato){
    let saldoFinal = 0
    for(i = 0; i<extrato.length; i++){
        saldoFinal =(saldoFinal + extrato[i])
    
    }
    return saldoFinal
}
let conta = saldoConta([100, -20, -30, 10, -7, -21, -5])
console.log(`O saldo final da conta é R$ ${conta} reais`)
