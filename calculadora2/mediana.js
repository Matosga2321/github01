function mediana (num1, num2, num3) {
    const numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    return numeros[1];
}
export { mediana };