const clientes = require("./cliente.json");

const encontrar = (lista, chave, valor) => lista.find((item) => item[chave].includes(valor));
const encontrado = encontrar(clientes, "nome", "Kirby");
const encontradoDois = encontrar(clientes, "telefone", "99916828153");
console.log(encontrado)
console.log(encontradoDois);