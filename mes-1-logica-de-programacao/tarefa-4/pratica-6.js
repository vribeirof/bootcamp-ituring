let lista = [4, 9, 16, 25, 36, 49]
lista.sort(function(a,b){
    if(a > b) return 1;
    if(a <b) return -1;
    return 0
})
console.log(lista)