function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    return num1 / num2;
}
export { divisao };