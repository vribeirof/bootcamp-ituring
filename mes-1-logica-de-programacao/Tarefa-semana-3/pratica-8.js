
function saldoConta(extrato){
   let saldoFinal = 0
    let depositos = 0
    let saidas = 0
    for(i = 0; i<extrato.length; i++){
       if(extrato[i]>0){
        depositos = depositos + extrato[i]
       }
       else if(extrato[i]<0){
        saidas = saidas - extrato[i]
       }
           
    }
    console.log(`O valor total depositado foi de: R$ ${depositos}`)
    console.log(`O valor total retirado foi de: R$ ${saidas}`)
    saldoFinal = depositos - saidas
    console.log(`O saldo final de sua conta foi positivo no valor de: R$ ${saldoFinal}`)

}


 saldoConta([100, -20, -30, 10, -7, -21, -5])














