const prompt = require("prompt-sync")();
let pacote = {
empresa: prompt("Nome da empresa: "),
orcamentoTotal: parseFloat(prompt("Orçamento total da noite: ")),
openBarFechado: false,
consumoExtras: []
};
let bebida1 = prompt("Digite a primeira bebida importada: ");
let bebida2 = prompt("Digite a segunda bebida importada: ");
pacote.consumoExtras.push(bebida1);
pacote.consumoExtras.push(bebida2);
let valorBebidas = parseFloat(prompt("Digite o valor total das duas bebidas: "));
pacote.orcamentoTotal -= valorBebidas;
if (pacote.orcamentoTotal < 0) {
pacote.openBarFechado = true;
pacote["Multa Excedente"] = 500;
}
console.log("Empresa:", pacote.empresa);
console.log("Bebidas extras:", pacote.consumoExtras);
console.log("Orçamento restante:", pacote.orcamentoTotal);
console.log("Open Bar Fechado:", pacote.openBarFechado);
if (pacote["Multa Excedente"]) {
console.log("Multa Excedente:", pacote["Multa Excedente"]);
}