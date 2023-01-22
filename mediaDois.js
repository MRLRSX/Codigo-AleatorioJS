const notas = [8.0, 5.9, 10.0, 10.0];

// 0.0
const media = notas.reduce((x, y) =>  x + y) / notas.length;
console.log(media);

// Huuum 1.0

let m = 0.0;
for(let x = 0; x < notas.length; x++){
    m += notas[x];
}
const m2 = m / notas.length;
console.log(m2) 

// Huum 2.0 
let mm = 0.0;
for(let elemento of notas){
    mm += elemento;
}
console.log(mm / notas.length)
