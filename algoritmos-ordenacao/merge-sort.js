const livro = require('../ordenacao-algoritmos/livro.json');

function mergeSort(array, nivelAninhamento = 0){
     console.log(`Nivel de aninhamento: ${nivelAninhamento}`);
     console.log(array);
    if(array.length > 1){
      const meio = Math.floor(array.length / 2); // arrendoda;
      const part1 =  mergeSort(array.slice(0, meio), nivelAninhamento + 1);
      const part2 =  mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);
      array = ordena(part1, part2);
   }
   return array;
}

function ordena(part1, part2){
    let posicaoAtualparte1 = 0;
    let posicaoAtualparte2 = 0;
    const resultado = [];

    while(posicaoAtualparte1 < part1.length && posicaoAtualparte2 < part2.length){
        let produtoAtualParte1 = part1[posicaoAtualparte1];
        let produtoAtualParte2 = part2[posicaoAtualparte2];

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1);
            posicaoAtualparte1++;
        }else{
            resultado.push(produtoAtualParte2);
            posicaoAtualparte2++;
        }
    }
    return resultado.concat(posicaoAtualparte1 < part1.length ? part1.slice(posicaoAtualparte1) : part2.slice(posicaoAtualparte2));

}
console.log(mergeSort(livro));