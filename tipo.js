const meuNumero = 3;
const segundoNumero = 10;
const operacao = meuNumero + segundoNumero;

console.log(operacao * 3);

const operacaoDois = (operacao * 2) / 3;
console.log(operacaoDois);

const numeroPontoFlutuante = 3.3;
const numeroPontoFlutuanteDois = .3;


// Nan igual no Java (não e numero)

console.log(numeroPontoFlutuante, numeroPontoFlutuanteDois);

// template String

const varTeste = `
  Teste de string ${operacao} ${meuNumero} ${numeroPontoFlutuante}
  ${numeroPontoFlutuanteDois} apenas para testar as variaveis utilizadas 
  nesse script. Concatenar tudo em um template string
`;
console.log(varTeste);