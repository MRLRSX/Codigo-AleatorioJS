


const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]; // atribui 1 para num1, 2 para num2, e 3 4 5 para outros Numeros
const [nome1 = 'Lucas Rocha'] = []; // definir uma valor padrão 

console.log(num1, num2, outrosNumeros);
console.log(nome1);

const pessoa = {
    nome: 'Lucas',
    idade: 27,
};

const pessoaComTelefone = { ...pessoa, telefone: '38-9-9999-9999'};
console.log(pessoa);
console.log(pessoaComTelefone);

const nomeComun = pessoa.nome;
console.log(nomeComun);

const {nome = 'Pedro'} = pessoa;
console.log(nome);

function imprimeDados({nome, idade}){
    console.log(nome, idade);
}

function imprimeDadosDois(dados){
    const {nome, idade} = dados;
    console.log(nome, idade);
}

// Duas funções que fazem a mesma coisa porem de forma diferente 
imprimeDados(pessoa);
imprimeDadosDois(pessoa); 