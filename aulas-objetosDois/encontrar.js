const clientes = require("./cliente.json");

const encontrar = (lista, chave, valor) => lista.find((item) => item[chave] === valor);
const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado)