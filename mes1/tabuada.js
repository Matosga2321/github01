const prompt = require("prompt-sync")();
let tabuada = parseInt(prompt("Qual tabuada você deseja ver? "));
for (let i = 1; i <= 10; i++) {
    console.log(tabuada + " x " + i + " = " + (tabuada * i));
}
