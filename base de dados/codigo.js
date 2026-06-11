const prompt = require('prompt-sync')();
import contatos from "./contatos.js";
import listarContatos from "./listarcont.js";
import adicionarcontatos from "./adicionar.js";
import removerconta from "./exclusão.js";
import atualizarcontatos from "./atualizar.js"; 
function menu() {
    console.log(" ||____________________||");
    console.log(" || Menu de Contatos:  ||");
    console.log(" ||____________________||");
    console.log(" ||1. Listar contatos ||");
    console.log(" ||2. Adicionar contato||");
    console.log(" ||3. Atualizar contato||");
    console.log(" ||4. Remover contato  ||");
    console.log(" ||5. Sair             ||");
    console.log(" ||____________________||");
}

