const notas = [7, 7, 8, 9];
const novasNotas = [...notas]; // operador de espalhamento
//const novasNotas = notas; ele da problema de referencia se alterar em um altera nos dois 
novasNotas.push(10);
console.log(novasNotas);