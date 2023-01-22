const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "000.000.000-00",
    email: "andre@gmail.com"

};

console.log(`O nome do cliente e ${cliente.nome} e essa pessoa tem ${cliente.idade}`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);