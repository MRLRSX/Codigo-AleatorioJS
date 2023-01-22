const chamada = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
chamada.splice(chamada.findIndex(x => x === 'Ana'), chamada.findIndex(x => x === 'Caio'));
console.log(chamada);