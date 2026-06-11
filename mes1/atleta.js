const prompt = require("prompt-sync")();
let atleta = {
    nome: prompt("Digite o nome do atleta: "),
    peso: parseFloat(prompt("Digite o peso atual (kg): ")),
    meta: prompt("Digite a meta (Emagrecimento ou Performance): "),
    distancias: [],
    selo: ""
};
for (let i = 1; i <= 3; i++) {
    let distancia = parseFloat(prompt(`Digite a distância da maratona ${i} (km): `));
    atleta.distancias.push(distancia);
}
let corridaHoje = parseFloat(prompt("Digite a distância corrida hoje (km): "));
atleta.distancias.push(corridaHoje);
let ultimasTres = atleta.distancias.slice(1);
let soma = 0;
for (let d of ultimasTres) {
    soma += d;
}
let media = soma / ultimasTres.length;
if (media > 20 && atleta.meta.toLowerCase() === "emagrecimento") {
    atleta.peso -= 1;
    atleta.selo = "Meta Atingida";
}
if (
    atleta.meta.toLowerCase() === "performance" &&
    corridaHoje > atleta.distancias[atleta.distancias.length - 2]
) {
    atleta.selo = "Novo Recorde Pessoal";
}
console.log("\n--- PERFIL DO ATLETA ---");
console.log("Nome:", atleta.nome);
console.log("Peso atual:", atleta.peso, "kg");
console.log("Meta:", atleta.meta);
console.log("Histórico de distâncias:", atleta.distancias);
console.log("Média das últimas corridas:", media.toFixed(2), "km");
console.log("Selo:", atleta.selo || "Nenhum");