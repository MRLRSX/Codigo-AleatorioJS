const livros = require("./livro.json");
const menorValor = require("./indiceMenorValor");

for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    let atualLivro = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = atualLivro;
}
console.log(livros);