const prompt = require("prompt-sync")();
let cliente = {
    nome: prompt("Digite o nome do cliente: "),
    categoria: "Gold",
    historico: [
        { destino: "São Paulo", milhas: 2000 },
        { destino: "Rio de Janeiro", milhas: 1800 }
    ]
};
let destino = prompt("Digite o destino do novo voo: ");
let milhas = parseInt(prompt("Digite as milhas acumuladas nesse voo: "));
cliente.historico.push({ destino: destino, milhas: milhas });
let totalMilhas = 0;
for (let voo of cliente.historico) {
    totalMilhas += voo.milhas;
}
if (totalMilhas > 5000) {
    totalMilhas -= 5000;
    cliente.categoria = "Platinum";
    console.log("Parabéns! Você foi promovido para categoria Platinum!");
} else {
    let faltam = 5000 - totalMilhas;
    console.log(`Faltam ${faltam} milhas para o upgrade para Platinum.`);
}
console.log("\n--- PERFIL FINAL ---");
console.log("Nome:", cliente.nome);
console.log("Categoria:", cliente.categoria);
console.log("Histórico de voos:", cliente.historico);
console.log("Milhas restantes:", totalMilhas);