const pessoa = {
    nome: "Lucas",
    profissao: "DEV",
    idade: 27,
};
console.log(pessoa.telefone); // undefined 

pessoa.telefone = "38 99999-9999"; // cria e insere 
console.log(pessoa.telefone)

pessoa.nome = "Lucas Rocha dos Santos";
console.log(pessoa);
