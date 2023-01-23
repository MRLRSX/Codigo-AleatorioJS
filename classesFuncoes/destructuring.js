const numerosPares = [0, 2, 4, 6, 10];
const numeroImpares = [1, 3, 5, 7, 9];

// Executa e veja diferença entre as 3 Instancias
const numeros = [...numeroImpares, ...numerosPares];
const numeroExemplo = numeroImpares.concat(numerosPares);
const numerosExemplo = [numeroImpares, numerosPares];


console.log(numerosExemplo);
console.log(numeros);
console.log(numeroExemplo);