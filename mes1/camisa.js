const prompt = require("prompt-sync")();
let estoqueTamanhos = [10, 15, 8];
let vendidas = Number(prompt("Quantas camisetas tamanho P foram vendidas hoje? "));
estoqueTamanhos[0] = estoqueTamanhos[0] - vendidas;
if (estoqueTamanhos[0] < 5) {
    console.log("Alerta: Estoque de camisetas tamanho P está crítico!");
} else {
    console.log("Estoque atualizado. Quantidade restante do tamanho P: " + estoqueTamanhos[0]);
}