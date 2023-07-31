


const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

const notaFinal = (nota1 + nota2 + nota3) / 3;

console.log('Nota final', notaFinal.toFixed(2));
if (notaFinal < 5) {
    console.log('Reprovado');
} else if (notaFinal >= 5 && notaFinal < 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}