const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let pesoTotal = 0;
let caixas = 0;
const limite = 1000;
function adicionarCaixa() {
  rl.question("Digite o peso da caixa (kg): ", function(peso) {
    peso = Number(peso);
    if (pesoTotal + peso > limite) {
      console.log("Alerta: carga máxima atingida. Não é possível adicionar esta caixa.");
      console.log("Peso total carregado: " + pesoTotal + " kg");
      console.log("Total de caixas carregadas: " + caixas);
      rl.close();
    } else {
      pesoTotal += peso;
      caixas++;
      adicionarCaixa();
    }
  });
}
adicionarCaixa();