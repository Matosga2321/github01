const prompt = require('prompt-sync')();
let codigoProduto = prompt("Diigite o codigo do produto (A1 B2 C3)")
switch (codigoProduto) {
    case "A1":
        console.log("Você escolheu: Batata Chips");
        break;
    case "B1":
        console.log("Você escolheu: Barrinha de Cereal");
        break;
    case "B2":
        console.log("Você escolheu: Amendoim");
        break;
    case "C3":
        console.log("Você escolheu: Biscoito de Chocolate");
        break;
    default:
        console.log("Código inválido. Tente novamente.");
        break;
}