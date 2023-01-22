let numeroUm = 5;
let numeroDois = 7;
const multiplicado = (x, y) => x * y;
const apresenta = name => `My name is ${name}`;
console.log(area(numeroUm, numeroDois));
imprimirConsole(soma(numeroUm, numeroDois)); // HUUMMMM
console.log(multiplicado(numeroUm, numeroDois));
console.log(apresenta("Lucas Rocha dos Santos"))


function area(num1, num2){
  return num1 * num2;
}

//

function imprimirConsole(texto){
    console.log(texto);
}


function soma(num1, num2){
   return num1 + num2;
}
