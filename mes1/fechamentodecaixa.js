const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const carrinhos = [
  { cliente: "João", produtos: [50.0, 120.5, 15.0] },
  { cliente: "Maria", produtos: [200.0, 45.9] },
  { cliente: "Carlos", produtos: [10.0, 5.5, 32.0, 8.0] }
];
let clientesConcluidos = [];
let indice = 0;
function processarCarrinho() {
  if (indice >= carrinhos.length) {
    console.log("\nRelatório de pagamentos concluídos:");
    clientesConcluidos.forEach(nome => console.log(nome));
    rl.close();
    return;
  }
  let carrinho = carrinhos[indice];
  let total = 0;
  carrinho.produtos.forEach(preco => {
    total += preco;
  });
  console.log("\nCliente:", carrinho.cliente);
  console.log("Total da compra: R$ " + total.toFixed(2));
  let pago = 0;
  function receberPagamento() {
    rl.question("Informe o valor recebido: ", function(valor) {
      pago += Number(valor);
      if (pago < total) {
        console.log("Valor insuficiente. Falta R$ " + (total - pago).toFixed(2));
        receberPagamento();
      } else {
        if (pago > total) {
          console.log("Troco: R$ " + (pago - total).toFixed(2));
        }
        console.log("Pagamento concluído para " + carrinho.cliente);
        clientesConcluidos.push(carrinho.cliente);
        indice++;
        processarCarrinho();
      }
    });
  }
  receberPagamento();
}
processarCarrinho();