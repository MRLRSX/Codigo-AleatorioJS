const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];




// Simples 
const nome = listaDeAlunosEMedias[0].find(x => x === 'Ana');
const indice = listaDeAlunosEMedias[0].indexOf(nome);
const media = listaDeAlunosEMedias[1][indice];
console.log(`Id:${indice} Nome: ${nome} Média ${media}`);



