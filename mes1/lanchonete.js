const prompt = require("prompt-sync")();
let pedido = {
    cliente: prompt("Digite o nome do cliente: "),
    valorBase: 30.00,
    quantidade: parseInt(prompt("Digite a quantidade de lanches: ")),
    extras: []
};
let extra1 = prompt("Digite o nome do primeiro ingrediente extra: ");
let valorExtra1 = parseFloat(prompt("Digite o valor do primeiro extra: "));
let extra2 = prompt("Digite o nome do segundo ingrediente extra: ");
let valorExtra2 = parseFloat(prompt("Digite o valor do segundo extra: "));
pedido.extras.push(extra1);
pedido.extras.push(extra2);
let subtotal = (pedido.valorBase + valorExtra1 + valorExtra2) * pedido.quantidade;
let total = subtotal;
if (pedido.extras.length === 2 && pedido.quantidade > 2) {
    total = subtotal * 0.8
}
console.log("\n--- PEDIDO ---");
console.log("Cliente:", pedido.cliente);
console.log("Ingredientes extras:", pedido.extras);
console.log("Subtotal: R$", subtotal.toFixed(2));
console.log("Total com desconto (se aplicado): R$", total.toFixed(2));