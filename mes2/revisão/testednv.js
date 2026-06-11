const prompt = require('prompt-sync')();
function verificarConsoantes() {
  const entrada = prompt('Digite uma letra ou palavra: ').toLowerCase();
  const consoantes = 'bcdfghjklmnpqrstvwxyz';
  if (entrada.length === 1) {
    if (consoantes.includes(entrada)) {
      console.log(`"${entrada}" é uma consoante.`);
    } else {
      console.log(`"${entrada}" não é uma consoante.`);
    }
  } else {
    console.log(`\nAnálise da palavra "${entrada}":`);
    let consoantesEncontradas = [];
    let vogaisEncontradas = [];
    let outros = [];
    for (const char of entrada) {
      if (consoantes.includes(char)) {
        consoantesEncontradas.push(char);
      } else if ('aeiou'.includes(char)) {
        vogaisEncontradas.push(char);
      } else {
        outros.push(char);
      }
    }
    console.log(`Consoantes (${consoantesEncontradas.length}): ${consoantesEncontradas.join(', ') || 'nenhuma'}`);
    console.log(`Vogais     (${vogaisEncontradas.length}): ${vogaisEncontradas.join(', ') || 'nenhuma'}`);
    if (outros.length > 0) {
      console.log(`Outros     (${outros.length}): ${outros.join(', ')}`);
    }
  }
}
verificarConsoantes();