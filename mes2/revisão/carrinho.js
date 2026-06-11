const prompt = require('prompt-sync')();
let carrinho = [];
function adicionarProduto() {
    const nome = prompt('Digite o nome do produto: ');
    const preco = parseFloat(prompt('Digite o preço do produto: '));
    const quantidade = parseInt(prompt('Digite a quantidade do produto: '));
    const produto = { nome, preco, quantidade };
    carrinho.push(produto);
    console.log('Produto adicionado ao carrinho');
}
function exibirCarrinho() {
    if (carrinho.length === 0) {
        console.log('Carrinho vazio, adicione um produto para continuarmos com a compra');
        return;
    }
    console.log('\nCarrinho de Compras:');
    carrinho.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.nome} - R$${produto.preco.toFixed(2)} x ${produto.quantidade} = R$${(produto.preco * produto.quantidade).toFixed(2)}`);
    });
}
function calcularTotal() {
    let total = 0;
    carrinho.forEach(produto => {
        total += produto.preco * produto.quantidade;
    });
    return total;
}
function finalizarCompra() {
    if (carrinho.length === 0) {
        console.log('Carrinho vazio! Adicione produtos antes de finalizar.');
        return;
    }
    exibirCarrinho();
    const total = calcularTotal();
    console.log(`\nTotal da compra: R$${total.toFixed(2)}`);
    console.log('Compra finalizada! Obrigado por comprar conosco.');
}
function menu() {
    while (true) {
        console.log('\n╔══════════════════════════╗');
        console.log('║   CARRINHO DE COMPRAS    ║');
        console.log('╠══════════════════════════╣');
        console.log('║  [1] Adicionar produto   ║');
        console.log('║  [2] Exibir carrinho     ║');
        console.log('║  [3] Finalizar compra    ║');
        console.log('║  [4] Sair                ║');
        console.log('╚══════════════════════════╝');

        const escolha = prompt('Escolha uma opção: ');

        switch (escolha) {
            case '1':
                adicionarProduto();
                break;
            case '2':
                exibirCarrinho();
                break;
            case '3':
                finalizarCompra();
                return;
            case '4':
                console.log('Saindo do programa...');
                return;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}
menu();