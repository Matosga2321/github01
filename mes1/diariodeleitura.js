const prompt = require("prompt-sync")();
let aluno = {
    nome: prompt("Digite o nome do aluno: "),
    pontosDeLeitura: 10,
    historicoDias: [
        { data: "10/03/2026", paginasLidas: 30 },
        { data: "11/03/2026", paginasLidas: 45 }
    ]
};
let dataHoje = prompt("Digite a data de hoje: ");
let paginas = parseInt(prompt("Quantas páginas você leu hoje? "));
let novoRegistro = {
    data: dataHoje,
    paginasLidas: paginas
};
aluno.historicoDias.push(novoRegistro);
if (novoRegistro.paginasLidas > 50 && aluno.pontosDeLeitura > 0) {
    aluno.pontosDeLeitura = aluno.pontosDeLeitura * 2;
    novoRegistro.data = novoRegistro.data + " - Super Leitor!";
} else if (novoRegistro.paginasLidas < 10) {
    aluno.pontosDeLeitura = aluno.pontosDeLeitura / 2;
}
console.log(aluno);