const prompt = require("prompt-sync")();

let nums = [
  parseFloat(prompt("Digite um número: ")),
  parseFloat(prompt("Digite outro número: ")),
  parseFloat(prompt("Digite mais um número: "))
];

console.log("Menor valor:", Math.min(...nums));