/* Função que mostra se a SenhaEhValida*/
function senhaEhValida(senha){
  const senhaMinimo6caracteres = senha.length >= 6
  return senhaMinimo6caracteres

}
function senhaEhValida(senha){
    return senha.length >= 6
}
console.log(senhaEhValida('123456'))
console.log(senhaEhValida('123456'))
console.log(senhaEhValida('123"'))
