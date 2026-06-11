function atualizarcontatos (id, contatos, nome, telefone, email) {
    let contatoEncontrado = false;
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].id === id) {
            contatoEncontrado = true;
            contatos[i].nome = nome;
            contatos[i].telefone = telefone;
            contatos[i].email = email;
            console.log("Contato atualizado com sucesso.");
            break;
        }
    }
    if (!contatoEncontrado) {
        console.log("Contato não encontrado.");
    }
}
export default atualizarcontatos;
