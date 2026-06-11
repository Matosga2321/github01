const prompt = require("prompt-sync")();
const senhaCorreta = 9876;
let tentativa = Number(prompt("Digite a senha do cofre:"));
while (tentativa !== senhaCorreta) {
  console.log("Acesso negado: Senha incorreta");
  tentativa = Number(prompt("Digite a senha novamente:"));
}
console.log("Cofre liberado com sucesso");