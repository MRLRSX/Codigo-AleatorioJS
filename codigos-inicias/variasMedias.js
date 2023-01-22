const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

const calculaMedia = (x, y) => x+= y;

console.log(salaJS.reduce(calculaMedia) / salaJS.length);
console.log(salaJava.reduce(calculaMedia) / salaJava.length);
console.log(salaPython.reduce(calculaMedia) / salaPython.length);
