const prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome: ");
let codigo = prompt("Digite seu código de acesso: ");

let  usuario= (nome, codigo) => {
    if (codigo === "1234") {
        console.log(`Bem-vindo, ${nome}! Acesso concedido.`);
    } else {
        console.log("Código de acesso inválido. Acesso negado.");
    }
}
usuario(nome, codigo);
console.log("Fim do programa.");