const prompt = require("prompt-sync")();
let filaProjetos = [];
let cliente = prompt("Digite o nome da empresa cliente:");
let valorEstimado = parseFloat(prompt("Digite o valor estimado do projeto em reais:"));
let projeto = {
  cliente: cliente,
  valorEstimado: valorEstimado
};
filaProjetos.push(projeto);
let urgente = prompt("O projeto possui prazo de entrega urgente? (sim/nao)").toLowerCase();
if (urgente === "sim" && filaProjetos[0].valorEstimado > 3000) {
  filaProjetos[0].valorEstimado = filaProjetos[0].valorEstimado * 1.15;
}
console.log(filaProjetos)