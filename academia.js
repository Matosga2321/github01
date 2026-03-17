const prompt = require("prompt-sync")();
let projeto = {
    coordenador: prompt("Digite o nome do coordenador: "),
    limiteMaximoVagas: parseInt(prompt("Digite o limite máximo de vagas: ")),
    areaEstudo: prompt("Digite a área de estudo do projeto: "),
    mentores: [
        { nome: "Carlos", areaDeAtuacao: "Tecnologia" },
        { nome: "Ana", areaDeAtuacao: "Tecnologia" }
    ],
    status: "Aberto"
};
let novoMentor = {
    nome: prompt("Digite o nome do novo voluntário: "),
    areaDeAtuacao: prompt("Digite a área de atuação do voluntário: ")
};
if (
    projeto.mentores.length < projeto.limiteMaximoVagas &&
    novoMentor.areaDeAtuacao === projeto.areaEstudo
) {
    projeto.mentores.push(novoMentor);
    console.log("\nMentor cadastrado com sucesso!");
} else {
    projeto.status = "Bloqueado para Inscrições";
    console.log("\nCadastro não permitido.");
}
console.log("\nFicha do Projeto:");
console.log(projeto);