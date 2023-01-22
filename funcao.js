let numeroUm = 5;
let numeroDois = 7;
const multiplicado = (x, y) => x * y;

console.log(area(numeroUm, numeroDois));
imprimirConsole(soma(numeroUm, numeroDois)); // HUUMMMM
console.log(multiplicado(numeroUm, numeroDois));


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
