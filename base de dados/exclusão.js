function removerconta() {
const indice =  contatos.findice(contato=>contato.id === id);
if (indice !== -1) {
    contatos.splice(indice, 1);
    console.log("Contato removido com sucesso.");
}
} 
export default removerconta;
import contatos from "./contatos.js";
