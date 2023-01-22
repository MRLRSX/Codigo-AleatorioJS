const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const texto =  (y, x) => medias[x] >= 7 ? `Nome: ${y} Aprovado ${medias[x]}` : `Nome ${y} Reprova ${medias[x]}`; 
const imprime = (x) => console.log(x);

const result = alunos.filter((y, x) => medias[x] >= 7);
imprime(result);