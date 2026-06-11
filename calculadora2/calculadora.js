import promptSync from "prompt-sync";
import chalk from "chalk";

const prompt = promptSync();
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        console.log(chalk.red("Erro: divisão por zero!"));
        return null;
    }
    return a / b;
}
function mostrarMenu() {
    console.log(chalk.blue     ("\n==========================="));
   console.log(chalk.green.bold("       CALCULADORA           "));
    console.log(chalk.blue     ("============================="));
    console.log(chalk.yellow   ("| 1 - Adição                |"));
    console.log(chalk.yellow   ("| 2 - Subtração             |"));
    console.log(chalk.yellow   ("| 3 - Multiplicação         |"));
    console.log(chalk.yellow   ("| 4 - Divisão               |"));
    console.log(chalk.yellow   ("| 5 - Média                 |"));
    console.log(chalk.yellow   ("| 6 - Mediana               |"));
    console.log(chalk.redBright("| 0 - Sair                  |"));
    console.log(chalk.blue     ("============================="));
}
function calculadora() {
    let opcao;

    do {
        mostrarMenu();
        opcao = prompt(chalk.cyan("Escolha uma opção: "));

        if (opcao === "0") {
            console.log(chalk.magenta("Encerrando..."));
            break;
        }

        const num1 = parseFloat(prompt(chalk.white("Digite o primeiro número: ")));
        const num2 = parseFloat(prompt(chalk.white("Digite o segundo número: ")));
        const num3 = parseFloat(prompt(chalk.white("Digite o terceiro número: ")));

        let resultado;

        switch (opcao) {
            case "1":
                resultado = soma(num1, num2);
                break;
            case "2":
                resultado = subtracao(num1, num2);
                break;
            case "3":
                resultado = multiplicacao(num1, num2);
                break;
            case "4":
                resultado = divisao(num1, num2);
                break;
            case "5":
                resultado = (num1 + num2 + num3) / 3;
                break;
            case "6":
                const numeros = [num1, num2, num3].sort((a, b) => a - b);
                resultado = numeros[1];
                break;
            default:
                console.log(chalk.red("Opção inválida!"));
                continue;
        }

        console.log(chalk.gray("\n------------------------------"));
        console.log(chalk.green.bold(`Resultado: ${resultado}`));
        console.log(chalk.gray("------------------------------\n"));

    } while (true);
}
calculadora();