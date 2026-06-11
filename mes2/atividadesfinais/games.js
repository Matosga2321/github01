const prompt=require("prompt-sync")();
console.log("Bem-vindo ao sistema de classificação de jogadores!");
console.log("Digite as pontuações de três partidas para classificar o jogador como 'Veterano' ou 'Iniciante'.");
const classificarJogador = (pontuacoes) => {
    const soma = pontuacoes.reduce((acc, curr) => acc + curr, 0);
    const ultimaPartida = pontuacoes[pontuacoes.length - 1];
    if (soma > 200 || ultimaPartida > 90) {
        return "Veterano";
    } else {
        return "Iniciante";
    }
};
let  pontuacoes = [];
let pontuacao
for (let i = 0; i < 3; i++) {
    pontuacao = parseInt(prompt(`Digite a pontuação da partida :${i+1} `));
    pontuacoes.push(pontuacao);
}
const classificacao = classificarJogador(pontuacoes);
console.log(`Classificação final: ${classificacao}`);