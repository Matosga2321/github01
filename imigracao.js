const prompt = require("prompt-sync")();
let passageiro = {
    nome: prompt("Digite o nome do passageiro: "),
    nacionalidade: prompt("Digite o pais natal "),
    trabalho: prompt("Está a trabalho? (sim/nao): ") === "sim",
    documentos: ["Passaporte", "Visto"]
};
let terceiroDocumento = prompt("Digite o terceiro documento de saúde: ");
passageiro.documentos.push(terceiroDocumento);

if (passageiro.nacionalidade.toLowerCase() !== "brasil") {
    if (passageiro.documentos[1] === "Visto" && passageiro.documentos[2] !== "") {
        passageiro.entradaPermitida = true;
    } else {
        passageiro.entradaPermitida = false;
    }
} else {
    if (passageiro.documentos[0] === "Passaporte") {
        passageiro.entradaPermitida = true;
    } else {
        passageiro.entradaPermitida = false;
    }
}
console.log(passageiro);