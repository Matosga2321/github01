const prompt = require('prompt-sync')();
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}
console.log("Digite as três notas para calcular a média:");
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 =parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let media = calcularMedia(nota1, nota2, nota3);
console.log("a media das notas é: " + media);
