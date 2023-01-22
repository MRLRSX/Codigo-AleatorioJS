const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];




// Simples 
const nome = listaDeAlunosEMedias[0].find(x => x === 'Ana');
const indice = listaDeAlunosEMedias[0].indexOf(nome);
const media = listaDeAlunosEMedias[1][indice];
console.log(`Id:${indice} Nome: ${nome} Média ${media}`);

const exemplo = "Ana";
const textoGrande = listaDeAlunosEMedias[0].includes(exemplo) == true 
? `Id ${listaDeAlunosEMedias[0].indexOf(exemplo)} Nome ${exemplo} ${listaDeAlunosEMedias[1][listaDeAlunosEMedias[0].indexOf(exemplo)]}` 
: `Não Cadastrado ${exemplo}`; 

console.log(textoGrande);



