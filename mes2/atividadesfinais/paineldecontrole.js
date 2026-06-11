const prompt = require('prompt-sync')();
let caixa = {
    operador: 'Operador 1',
    saldo: 100.00,
    historico: []
};
function registrarVenda(valor) {
    caixa.saldo += valor;
    caixa.historico.push(`Entrada: R$ ${valor.toFixed(2)}`);
    return caixa.saldo;
}
function registrarDespesa(valor) {
    caixa.saldo -= valor;
    caixa.historico.push(`Saída: R$ ${valor.toFixed(2)}`);
    return caixa.saldo;
}
while (true) {
    console.log("\nMenu:");
    console.log("V-Registrar Venda");
    console.log("D-Registrar Despesa");
    console.log("S-Sair");
    let escolha = prompt("Escolha uma operação (V/D/S): ").toUpperCase();
    if (escolha === 'S') {
        break;
    }
    let valor = parseInt(prompt("Digite o valor: "));
    if (escolha === 'V') {
        let novoSaldo = registrarVenda(valor);
        console.log(`Novo saldo após venda: R$ ${novoSaldo.toFixed(2)}`);
    } else if (escolha === 'D') {
        let novoSaldo = registrarDespesa(valor);
        console.log(`Novo saldo após despesa: R$ ${novoSaldo.toFixed(2)}`);
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}
console.log("\nRegistro do Caixa:");
console.log(`Operador: ${caixa.operador}`);
console.log(`Saldo: R$ ${caixa.saldo.toFixed(2)}`);
console.log("Histórico de Transações:");
caixa.historico.forEach(transacao => console.log(transacao));