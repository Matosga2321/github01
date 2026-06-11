const prompt=require('prompt-sync')();
function determinarSetor(criticidade) {
    switch (criticidade) {
        case 1:
            return "Atendimento Básico";
        case 2:
            return "Equipe Especializada";
        case 3:
            return "Gestão de Crise";
        default:
            return "Criticidade inválida";
    }
}
let filaDeAtendimento = [];
function adicionarChamado() {
    let criticidade = parseInt(prompt("Informe a criticidade do problema entre 1-3:"));
    let setor = determinarSetor(criticidade);
    if (setor !== "Criticidade inválida") {
        filaDeAtendimento.push(setor);
        console.log("Setor responsável: " + setor);
        console.log("Fila de Atendimento atualizada:", filaDeAtendimento);
    } else {
        console.log(setor);
    }
}
adicionarChamado();