function copaVotos(votos){
    let brasil = 0
    let argentina = 0
    let espanha = 0
    let portugal = 0
    for(i = 0; i<votos.length; i++){
        if( votos[i] == 1){
            brasil = brasil + 1
        }
        else if( votos[i] == 2){
            argentina = argentina + 1
        }
        else if(votos[i] == 3){
            espanha = espanha + 1
        }
        else if( votos[i] == 4){
            portugal = portugal + 1
        }
    }
        console.log(`Brasil: ${brasil} voto(s)`)
        console.log(`Argentina: ${argentina} voto(s)`)
        console.log(`Espanha: ${espanha} voto(s)`)
        console.log(`Portugal: ${portugal} voto(s)`)
    console.log("Resultado:" , "\n" ,"O Brasil é preferido para ganhar a copa do Mundo!")
}
copaVotos([1, 1, 1, 4, 4, 2, 3, 2])