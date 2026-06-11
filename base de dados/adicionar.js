function adicionarcontatos (contatos, novoContato) {
}
let emailexistente = false;
for (let i = 0; i < contatos.length; i++) {
    if (contatos[i].email === novoContato.email) {
        emailexistente = true;
        break;
    }
} 
if (emailexistente){
    console.log("O email já existe na lista de contatos.");
    return
} 
if (contatos.length > 0) {
    let ultimocontato = contatos[contatos.length - 1];
    novoContato.id = ultimocontato.id + 1;
}
else {
    novoContato.id = 1;
}
contatos.push(novoContato);
export default adicionarcontatos;
 import contatos from "./contatos.js";