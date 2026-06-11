const prompt = require('prompt-sync')();
function multiplicacao(a, b) {
    return a * b;
}
console.log("defina o valor de a e b");
let a = parseFloat(prompt("Digite o valor de a:"));
let b = parseFloat(prompt("Digite o valor de b:"));
let resultado = multiplicacao(a, b);
console.log(`O resultado da multiplicação é: ${resultado}`);