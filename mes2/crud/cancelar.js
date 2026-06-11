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