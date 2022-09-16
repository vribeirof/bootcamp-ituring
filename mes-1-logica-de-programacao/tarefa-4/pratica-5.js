let filme = {Titulo : "O Senhor dos Anéis: A Sociedade do Anel", 'Nota': "8,8", 'Duração': "2h58min", 'Ano' : "2001", 'Categoria' : "Ação e Aventura"  }
function filmeimdb(pelicula){
    console.log(`O filme ${pelicula.Titulo}, que estreou em ${pelicula.Ano} tem a avaliação de ${pelicula.Nota} pelo IMDB `)
}
filmeimdb(filme)