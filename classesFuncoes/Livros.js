class Livro{
  constructor(nome, editora, paginas){
    this.nome = nome;
    this.editora = editora;
    this.paginas = paginas;
  }
  anunciar (){
    console.log(`Titulo: ${this.nome}`);
  }
  descreverTitulo(){
    console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas`);
  }
  getNome() {return this.nome;}
  getEditora(){return this.editora;}
  getPaginas(){return this.paginas;}
}

const novoLivro = new Livro("Java Designer Patterns", "Casa do Código", 346);
novoLivro.descreverTitulo();
console.log(typeof Livro);

//typeof Class -> Function
//classes são açucar sintático 
//hoisted -> diferença de funcionalidades Class não jogas para cima do código para utilizar tem que instancia