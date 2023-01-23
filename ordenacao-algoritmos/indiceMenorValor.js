
function menorValorIndice(arrLivros, posicaoAtual){
    let maisBarato = posicaoAtual;
    for(let atual = posicaoAtual; atual < arrLivros.length; atual++){
        if(arrLivros[atual].preco < arrLivros[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato;
}
module.exports = menorValorIndice;