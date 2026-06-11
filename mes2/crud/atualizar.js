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