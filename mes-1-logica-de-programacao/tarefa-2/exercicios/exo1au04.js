function anoAtual(){
     const data= new Date()
     return data.getFullYear()
}






const ano = anoAtual()
const usuarioLogado = {nome: "José Dias" , anoNascimento: 1999}

const anoNascimento = usuarioLogado.anoNascimento
console.log(usuarioLogado.nome)
const idade = ano - anoNascimento
console.log(idade)
if (idade>=23)
    console.log("usuario permitido")
    else
    console.log("Usuario não autorizado")
console.log(ano)
