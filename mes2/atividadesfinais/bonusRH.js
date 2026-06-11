const prompt = require('prompt-sync')();
console.log("menu de seleção:\n1 - estagiário\n2 - Júnior\n3 - pleno");
function calcularBonus(nivel, salario) {
    let bonus = 0;
    switch (nivel) {
        case 1:
            bonus = salario * 0.10;
            break;
        case 2:
            bonus = salario * 0.15;
            break;
        case 3:
            bonus = salario * 0.20;
            break;
        default:
            bonus = 0;
            break;
    }
    return bonus;
}
let nivel = prompt("Digite o numero que rerpesenta o nível do funcionário: ");
let salario = Number(prompt("Digite o salário: "));
if (salario <= 0) {
    console.log("Salário inválido.");
} else {
    let resultado = calcularBonus(nivel, salario);
    console.log("Bônus calculado: R$ " + resultado.toFixed(2));
}