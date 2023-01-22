const primeiroNumero = 5;
const segundoNumero = 2;
const soma = primeiroNumero + segundoNumero;
const idade = 17;
const idadeDois = 27;


console.log(maiorQue10(soma));

const maiorDeIdade = idade > 18; 
console.log(maiorDeIdade);

const textoMaiorDeIdade = idadeDois > 18 ? "Maior de Idade = ".concat( idadeDois) : "Menor de Idade =  ".concat(idadeDois);
console.log(textoMaiorDeIdade); 

function maiorQue10(numero){
    
    if(numero > 10 & numero < 20){
       return true;
    }
    return false;
}