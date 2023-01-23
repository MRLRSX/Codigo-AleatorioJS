const livraria = require("./livro.json");

function ordenar(lista, propriedade){
    const result = lista.sort((a,b) =>{
       if(a[propriedade] > b[propriedade]){
           return 1;
       }
       if(a[propriedade] < b[propriedade]){
           return - 1;
       } 
       return 0;
     });
     return result;
   }
   const resultado = ordenar(livraria, "preco");
   console.log(resultado);