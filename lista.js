const cursos = [];

cursos.push(9.5);
cursos.push(8.5);
cursos.push(8.0);
cursos.push(6.9);


console.log(cursos.reduce((x, y) => x + y) / cursos.length > 7  ? 'Passou' : 'Reprovou');

// Gosto mais de Java

