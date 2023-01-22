const nomes = ["Evaldo", "Mari", "Camis"];

const imprime = (x) => console.log(x);
const imprimeDois = function(x){
    console.log(x);
}
function imprimeTres(x){
    console.log(x);
}

nomes.forEach(imprime);
nomes.forEach(imprimeDois);
nomes.forEach(imprimeTres);