const prompt = require('prompt-sync')();
function verificarConsoante() {
    const letra = prompt('Digite uma letra: ').toLowerCase();
    const consoantes = 'bcdfghjklmnpqrstvwxyz';
    if (consoantes.includes(letra)) {
        console.log(`${letra} é uma consoante.`);
    } else {
        console.log(`${letra} não é uma consoante.`);
    }
 }
 verificarConsoante()