// var valor default de variaveis js
// let 
// const 

var altura = 5;
var comprimento = 7;


console.log(areaQuadrado(altura, comprimento));
console.log(areaRentagulo(altura, comprimento));

function areaQuadrado(num1, num2){
    return num1 * num2;
}

function areaRentagulo(num1, num2){
    return num1 * num2 / 2;
}