const prompt = require('prompt-sync')();
let pedido = {
    cliente: prompt("Digite o nome do cliente:")
};
let opcao = Number(prompt(
`
1 - Fone
2 - Teclado
3 - Mouse
`))
switch (opcao) {
    case 1:
        pedido.produto = "Fone";
        break;
    case 2:
        pedido.produto = "Teclado";
        break;
    case 3:
        pedido.produto = "Mouse";
        break;
    default:
        console.log("Produto desconhecido");
        break;
}
console.log(`Pedido do cliente: ${pedido.cliente}\nProduto escolhido: ${pedido.produto}`);