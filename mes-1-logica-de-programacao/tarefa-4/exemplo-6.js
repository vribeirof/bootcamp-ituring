let usuario = {
    //propriedade : valor , 
    "nome" : "Tiago",
    "idade" : 30,
    "temPremium" : true,
    "livroPreferidos" : ["Sapiens", "O sol é para todos"],
    "habilidades" : {"musica" : 10, "videogame" : 8, "matematica": 10}
}

//console.log(usuario)
//console.log(usuario.nome)

//lista de objetos

let alunos = [
    {'nome': 'Vitor', 'FezProva' : true, 'media': 9},
    {'nome': 'Pedro', 'FezProva' : true, 'media': 8},
    {'nome': 'Gabriel', 'FezProva' : true, 'media': 6},
    {'nome': 'Joao', 'FezProva' : true, 'media': 5},
    {'nome': 'JOaana', 'FezProva' : true, 'media': 5},
    {'nome': 'Vitor', 'FezProva' : true, 'media': 5},
    {'nome': 'Victoria', 'FezProva' : true, 'media': 6},
    {'nome': 'Vitor', 'FezProva' : false, 'media': 8},
    {'nome': 'Vitor', 'FezProva' : false, 'media': 9},

]
//console.log(alunos[5])
// uma lista apenas com os alunos aprovados
// precisa ter feito a prova e ter media maior ou igual a 6
function alunosAprovados(lista){
    let alunosAprovadoss = []
    for (let aluno of alunos){
        if (aluno.FezProva == true && aluno.media >=6){
           alunosAprovadoss.push(aluno.nome)
        }
        
    }
    return alunosAprovadoss
}
let alunosAprovadissimos = alunosAprovados(alunos)
console.log(alunosAprovadissimos)


// resolvendo com .filter e .map
function alunosAprovadassos (lista2){
    let alunosAP = lista2.filter(function(aluno){
        return aluno.FezProva && aluno.media >=6
    })
    let alunoAPR = alunosAP.map(function(aluno){
        return aluno.nome
    })
    return alunoAPR
}
let alunitchos = alunosAprovadassos(alunos)
console.table(alunitchos)
console.table(alunos[0])

// objetos podem conter funçoes
let pessoa = {
    nome: 'Joana',
    fezProva: false,
    media: 6,
    dizerOi: function() {
        console.log("Oi!")
    },
    seAprensentar: function(){
        console.log(
            `Oi meu nome é ${this.nome} e tirei ${this.media} na prova`
        )
    }
}
pessoa.seAprensentar()
  