let somaPares = 0;
let somaImpares = 0;
let totalPares = 0;
let totalImpares = 0;
let mediaPares = 0;
let mediaImpares = 0;
for (let numero = 0; numero <= 999; numero++) {
    if (numero % 2 == 0) {
        somaPares += numero;
        totalPares++;
    } else {
        somaImpares += numero;
        totalImpares++;
    }
}
mediaPares = somaPares / totalPares;
mediaImpares = somaImpares / totalImpares;
console.log("Soma dos pares:", somaPares);
console.log("Soma dos ímpares:", somaImpares);
console.log("Total de pares:", totalPares);
console.log("Total de ímpares:", totalImpares);
console.log("Média dos pares:", mediaPares);
console.log("Média dos ímpares:", mediaImpares);
if (somaPares > somaImpares) {
    console.log("A soma dos números pares é maior.");
} else if (somaImpares > somaPares) {
    console.log("A soma dos números ímpares é maior.");
} else {
    console.log("As somas são iguais.");
}