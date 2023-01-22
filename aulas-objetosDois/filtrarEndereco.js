const clientes = require("./cliente.json");
//hasOwnProperty verifica se existe a propriedade
const filtroCliente = (lista) => lista.filter((cliente) => cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));

const clientesFiltrados = filtroCliente(clientes);
console.log(clientesFiltrados);