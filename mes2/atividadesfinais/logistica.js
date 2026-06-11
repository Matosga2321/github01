const prompt = require('prompt-sync')();
function atualizarStatus(codigo) {
    switch (codigo) {
        case "P":
            return "Pendente de Envio";
        case "E":
            return "Em Rota de Entrega"
        case "C":
            return "Cancelado";
        default:
            return "Status Inválido";
    }
}
let encomenda = {
    id: 1,
    status: ""
};
const codigoStatus = prompt("Digite o código do status atual (P, E, C):");
encomenda.status = atualizarStatus(codigoStatus);
console.log(encomenda);