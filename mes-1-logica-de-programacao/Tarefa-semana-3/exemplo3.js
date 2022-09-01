/*function tabuada(x, n){
    let i = 1
    let tabuada = 1
    while (i <= n){
        tabuada = x*i
        console.log(tabuada)
        i += 1

    }
}
tabuada(10,10)
*/
//function tabuada2(y, j){
    //for (let i = 1; i<= j; i++){
  //  tabuadaj = y*i
   // console.log(tabuadaj)
//    }
//}
//tabuada2(20, 20)
 
function geradorDeLista(tamanhoDaLista){
let lista = []
for (let i = 0; i < tamanhoDaLista; i++){
    lista[i] = i
}
return lista
}
let minhaListaDeLoop = geradorDeLista(10)
console.log(minhaListaDeLoop)
