const prompt = require("prompt-sync")();
let carrinho = {
    nome: prompt("Nome do cliente: "),
    assinatura: prompt("Digite o tipo de assinatura (Prime ou Padrão): "),
    itens: []
};
for (let i = 1; i <= 3; i++) {
    let preco = parseFloat(prompt(`Digite o valor do produto ${i}: `));
    if (isNaN(preco) || preco < 0) {
        console.log("Por favor digite um valor válido!");
        i--;
    } else {
        carrinho.itens.push(preco);
    }
}
let total = carrinho.itens.reduce((soma, preco) => soma + preco, 0);
if (total > 200 || carrinho.assinatura.toLowerCase() === "prime") {
    console.log("Parabéns! Frete grátis ativado!");
} else {
    total += 30;
    console.log("Frete de R$30 aplicado.");
}
console.log("Total da compra: R$", total.toFixed(2));