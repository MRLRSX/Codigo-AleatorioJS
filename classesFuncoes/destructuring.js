const numerosPares = [0, 2, 4, 6, 10];
const numeroImpares = [1, 3, 5, 7, 9];

// existe diferença entre os dois
const numeros = [...numeroImpares, ...numerosPares];
const numerosExemplo = [numeroImpares, numerosPares];
const numeroExemplo = numeroImpares.concat(numerosPares);
console.log(numerosExemplo);
console.log(numeros);
console.log(numeroExemplo);