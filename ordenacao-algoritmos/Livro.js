class Livro{
    constructor(nome, editora, pagina, preco){
        this.nome = nome;
        this.editora = editora;
        this.pagina = pagina;
        this.preco  = preco;
    }

    anunciar (){
        console.log(`Titulo: ${this.nome}`);
      }
      descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas ${this.preco}`);
      }
      getNome() {return this.nome;}
      getEditora(){return this.editora;}
      getPaginas(){return this.paginas;}
      getPreco(){return this.preco;}
    }


const livraria = require("./livro.json");
const livros = livraria.map((elemento)  => new Livro(elemento.titulo, elemento.editora, elemento.paginas, elemento.preco));

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

const novaListaOrdenada = ordenar(livros, "preco");
console.log(novaListaOrdenada);
