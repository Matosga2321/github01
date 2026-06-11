const prompt = require("prompt-sync")();
let estacao = {
    id: "Sensor-01",
    local: "Laboratório",
    temperaturas: []
}
const atualizando_Temperatura = (estacao) => {
    for (let i = 1; i <= 3; i++) {
        let temp = Number(prompt(`Digite a ${i}ª temperatura do dia: `));
        estacao.temperaturas.push(temp);
    }
    let soma = estacao.temperaturas[0] + estacao.temperaturas[1] + estacao.temperaturas[2];
    let media = soma / 3;
    if (media > 35) {
        estacao.alerta = true;
        console.log(`PERIGO: Média de temperatura extrema (${media} graus) detectada no ${estacao.local}!`);
    } else {
        estacao.alerta = false;
        console.log("Temperaturas dentro da normalidade.");
    }
    console.log(estacao);
}

atualizando_Temperatura(estacao);