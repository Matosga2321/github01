const prompt = require('prompt-sync')();

let temperaturas = [];

const avaliarTemperaturas=() => {
    for (let i = 0; i < 3; i++) {
        temperaturas.push(Number(prompt("Digite a temperatura:")));
    }
    const media = (temperaturas[0] + temperaturas[1] + temperaturas[2]) / 3;
    if (media > 30) {
        console.log("Alerta de Aquecimento");
    } else {
        console.log("Clima Estável");
    }
}

avaliarTemperaturas(temperaturas);

console.log("Temperaturas digitadas:" + temperaturas);