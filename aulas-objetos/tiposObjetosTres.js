const estudante = {
    nome: "Pablo Henrique Lima",
    matricula: 201542090,
    curso: "Engenharia eletrônica",
    materias: [{
      materia1: "Cálculo 1",
      materia2: "Álgebra Linear",
      materia3: "Práticas de Laboratório",
      materia4: "Metodologia",
    },{
    materia1: "Java One",
    materia2: "Java Two",
    materia3: "Java Three",
    materia4: "Java For",
  },],
  };
const chaves = ['materia1', 'materia2', 'materia3', 'meteria4'];
chaves.forEach((chaves) => console.log(`- ${chaves} - ${estudante.materias[0][chaves]}`));