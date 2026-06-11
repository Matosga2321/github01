const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let total = 0;
let resposta;
function pedirItem() {
  rl.question("Digite o valor do item: ", function(valor) {
    total += Number(valor);
    rl.question("Deseja adicionar mais algum item? (sim/nao): ", function(resp) {
      resposta = resp.toLowerCase();
      if (resposta === "sim") {
        pedirItem();
      } else {
        console.log("Valor total a pagar: R$ " + total);
        rl.close();
      }
    });
  });
}
pedirItem();