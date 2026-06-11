const prompt = require('prompt-sync')();
function exibirImpares() {
    const numero = parseInt(prompt('Digite um número: '));
    console.log(`Números ímpares de 1 até ${numero}:`);
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
exibirImpares();0
