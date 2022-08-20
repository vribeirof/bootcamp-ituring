/* FizzBuzz,
um algoritmo que resolve a seguinte situação
a- se for multiplo de 3 mostra Fizz;
b- se for multuiplo de 5 mostra Buzz;
c- Se for multiplo de 3 e 5 mostra FizzBuzz;
d- qualquer outro numero mostra o número
*/
let numero = 15
if (numero%3 == 0){
    console.log("Fizz")
}
    if (numero%5 == 0){
    console.log("Buzz")
}
    if (numero%5 == 0 && numero%3 == 0){
    console.log("FizzBuzz")
}
else{
    console.log(numero)
}
