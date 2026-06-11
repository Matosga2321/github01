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
import { medicos, pacientes, consultas } from "./dados.js";
