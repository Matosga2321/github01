function listarContatos(contatos) {
    if (contatos.length === 0) {
        console.log("Nenhum contato cadastrado.");
        return;
    }

    contatos.forEach(contato => {
        console.log(`ID: ${contato.id}`);
        console.log(`Nome: ${contato.nome}`);
        console.log(`Telefone: ${contato.telefone}`);
        console.log(`Email: ${contato.email}`);
        console.log('-------------------------');
    });
}

export default listarContatos;
