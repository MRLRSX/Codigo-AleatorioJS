const dados = require("./cliente.json"); // LER ARQUIVO JSON EXTERNO E TRANSFORMA EM OBJETO

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString) // OBJETO PARA STRING

console.log(dados.nome);
console.log(dados.email);
console.log(dados.telefone);
console.log(dados.endereco);

const clienteOjeto = JSON.parse(clienteEmString); // STRING PARA OBJETO 
console.log(clienteOjeto);

