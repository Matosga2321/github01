const prompt = require("prompt-sync")({ sigint: true });
let consultas = [
        { id: 1, idMedico: 1, idPaciente: 1, data: "2024-07-01", descricao: "Consulta de rotina" },
        { id: 2, idMedico: 2, idPaciente: 2, data: "2024-07-02", descricao: "Consulta de acompanhamento" }
];
let medicos = [
    { id: 1, nome: "Dr. João" },
    { id: 2, nome: "Dra. Maria" }
];
let pacientes = [
    { id: 1, nome: "Carlos" },
    { id: 2, nome: "Ana" }
];

function encontrarMedicoPorId(id) {
    return medicos.find(m => m.id === id);
}

function encontrarPacientePorId(id) {
    return pacientes.find(p => p.id === id);
}

function adicionarConsulta() {
    const idMedico = Number(prompt("Digite o ID do médico: "));
    const idPaciente = Number(prompt("Digite o ID do paciente: "));
    const data = prompt("Digite a data da consulta: ");
    const descricao = prompt("Digite a descrição da consulta: ");

    const medicoExiste = medicos.some(m => m.id === idMedico);
    const pacienteExiste = pacientes.some(p => p.id === idPaciente);

    if (!medicoExiste) {
        console.log("Erro: Médico não encontrado.");
        return;
    }
    if (!pacienteExiste) {
        console.log("Erro: Paciente não encontrado.");
        return;
    }

    const novoId = consultas.length > 0
        ? consultas[consultas.length - 1].id + 1
        : 1;

    const novaConsulta = {
        id: novoId,
        idMedico,
        idPaciente,
        data,
        descricao
    };

    consultas.push(novaConsulta);
    console.log("✅ Consulta cadastrada com sucesso!");
}

function listarConsultas() {
    if (consultas.length === 0) {
        console.log("Nenhuma consulta cadastrada.");
        return;
    }

    console.log("\n📋 Lista de Consultas:");
    console.log("─".repeat(50));
    consultas.forEach(consulta => {
        const medico = encontrarMedicoPorId(consulta.idMedico);
        const paciente = encontrarPacientePorId(consulta.idPaciente);
        console.log(`ID da Consulta : ${consulta.id}`);
        console.log(`Médico         : ${medico.nome}`);
        console.log(`Paciente       : ${paciente.nome}`);
        console.log(`Data           : ${consulta.data}`);
        console.log(`Descrição      : ${consulta.descricao}`);
        console.log("─".repeat(50));
    });
}

function atualizarConsulta() {
    const id = Number(prompt("Digite o ID da consulta que deseja alterar: "));

    const consulta = consultas.find(c => c.id === id);

    if (!consulta) {
        console.log("Erro: Consulta não encontrada.");
        return;
    }

    const medico = encontrarMedicoPorId(consulta.idMedico);
    const paciente = encontrarPacientePorId(consulta.idPaciente);
    console.log("\n📄 Dados atuais da consulta:");
    console.log(`Médico     : ${medico.nome} (não pode ser alterado)`);
    console.log(`Paciente   : ${paciente.nome} (não pode ser alterado)`);
    console.log(`Data       : ${consulta.data}`);
    console.log(`Descrição  : ${consulta.descricao}`);
    console.log("\n💡 Deixe em branco para manter o valor atual.\n");

    const novaData = prompt("Nova data da consulta: ");
    const novaDescricao = prompt("Nova descrição da consulta: ");

    consulta.data = novaData || consulta.data;
    consulta.descricao = novaDescricao || consulta.descricao;

    console.log("✅ Consulta atualizada com sucesso!");
}
function cancelarConsulta() {
    const id = Number(prompt("Digite o ID da consulta que deseja cancelar: "));

    const indice = consultas.findIndex(c => c.id === id);

    if (indice === -1) {
        console.log("❌ Erro: Consulta não encontrada.");
        return;
    }

    consultas.splice(indice, 1);
    console.log("✅ Consulta cancelada com sucesso!");
}

let continuar = true;
while (continuar) {
    const reset  = "\x1b[0m";
    const purple = "\x1b[35m";
    const blue   = "\x1b[34m";
    const cyan   = "\x1b[36m";
    const red    = "\x1b[31m";
    const dim    = "\x1b[2m";

    const W = 28; 

    const linha  = "═".repeat(W);
    const sep    = "─".repeat(W);
    const titulo = "=== MENU ===";
    const pad    = Math.floor((W - titulo.length) / 2);
    const tCenter = " ".repeat(pad) + titulo + " ".repeat(W - pad - titulo.length);

    console.log(`${purple}╔${linha}╗${reset}`);
    console.log(`${purple}║${reset}${tCenter}${purple}║${reset}`);
    console.log(`${purple}╠${linha}╣${reset}`);
    console.log(`${dim}   ║${reset} ${blue}1${reset} ${dim}—${reset} ${cyan}Adicionar consulta ${reset} ${dim}║${reset}`);
    console.log(`${dim}   ║${reset} ${blue}2${reset} ${dim}—${reset} ${cyan}Listar consultas   ${reset} ${dim}║${reset}`);
    console.log(`${dim}   ║${reset} ${blue}3${reset} ${dim}—${reset} ${cyan}Atualizar consulta ${reset} ${dim}║${reset}`);
    console.log(`${dim}   ║${reset} ${blue}4${reset} ${dim}—${reset} ${cyan}Cancelar consulta  ${reset} ${dim}║${reset}`);
    console.log(`${purple}╠${linha}╣${reset}`);
    console.log(`${dim}   ║${reset} ${red}0${reset} ${dim}—${reset} ${red}Sair               ${reset} ${dim}║${reset}`);
    console.log(`${purple}╚${linha}╝${reset}`);

    const opcao = prompt("Escolha uma opção: ");

    if (opcao === "1") {
        adicionarConsulta();
    } else if (opcao === "2") {
        listarConsultas();
    } else if (opcao === "3") {
        atualizarConsulta();
    } else if (opcao === "4") {
        cancelarConsulta();
    } else if (opcao === "0") {
        continuar = false;
        console.log("Encerrando...");
    } else {
        console.log("Opção inválida.");
    }
}