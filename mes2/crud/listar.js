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
import { medicos, pacientes, consultas } from "./dados.js";
