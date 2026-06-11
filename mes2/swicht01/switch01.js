const prompt = require('prompt-sync')();
console.log("menu de seleção:\n1 - Ação\n2 - Comédia\n3 - Terror\n4 - Animação");
let genero = parseInt(prompt("Digite o numero do genero do filme:"));
switch (genero){
    case 1:
        console.log("O filme é de Ação");
        break;
    case 2:
        console.log("O filme é de Comédia");
        break;
    case 3:
        console.log("O filme é de Terror");
        break;
    case 4:
        console.log("O filme é de Animação");
        break;
    default:
        console.log("Gênero desconhecido");
        break;
}