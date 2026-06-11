const prompt = require("prompt-sync")();
let listaAlunos = ["Messi", "Neymar"];
let novoAluno = prompt(`Digite o nome do aluno 3: `);
listaAlunos.push(novoAluno);
if (listaAlunos.length === 3) {
    console.log(`Turma formada com sucesso! Alunos:`, listaAlunos);
}