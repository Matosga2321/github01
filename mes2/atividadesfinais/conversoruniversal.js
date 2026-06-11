const prompt = require("prompt-sync")();
const conversorUniversal = (valorEmReais, moedaDestino) => {
    let valorConvertido;
    
    console.log("menu de seleção:\n1 - USD\n2 - EUR\n3 - GBP");
    switch (moedaDestino) {
        case 1 :
            valorConvertido = valorEmReais / 5; 
            break;
        case 2:
            valorConvertido = valorEmReais / 6; 
            break;
        case 3:
            valorConvertido = valorEmReais / 7; 
            break;
        default:
            valorConvertido = valorEmReais; 
    }
    return valorConvertido;
};
const valorEmReais = parseInt(prompt("Digite o valor em Reais:"));
const moedaDestino = parseInt(prompt("Digite o número correspondente à moeda de destino (1 para USD, 2 para EUR, 3 para GBP):"));
const resultado = conversorUniversal(valorEmReais, moedaDestino);
console.log(`Valor convertido foi aproximadamente:${resultado}`);