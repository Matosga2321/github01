const prompt = require("prompt-sync")();
let servidor = {
    nome: "Servidor Principal AWS",
    capacidadeMaximaGigabytes: 500,
    sitesHospedados: [
        {
            dominio: "meusite.com",
            tamanhoOcupadoGB: 100
        }
    ]
}
let dominioNovo = prompt("Digite o domínio do novo site: ");
let tamanhoNovo = parseFloat(prompt("Digite o tamanho do site em GB: "));
let tamanhoAtual = servidor.sitesHospedados[0].tamanhoOcupadoGB;
let total = tamanhoAtual + tamanhoNovo;
if (total <= servidor.capacidadeMaximaGigabytes) {
    let novoSite = {
        dominio: dominioNovo,
        tamanhoOcupadoGB: tamanhoNovo
    }
    servidor.sitesHospedados.push(novoSite);
    console.log("Upload Concluído! Sistema Operacional");
} else {
    servidor.alertaSobrecarga = true;
    console.log("Falha: Falta de Espaço Físico. Cancele o deploy");
}
console.log(servidor);