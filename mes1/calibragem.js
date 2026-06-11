const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Digite a temperatura inicial: ", function(tempInicial) {
  let temperatura = Number(tempInicial);
  for (let i = 1; i <= 5; i++) {
    temperatura += 2;
    console.log("Calibragem " + i + ": " + temperatura + " graus");
  }
  rl.close();
});