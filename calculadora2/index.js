let numeros = [0, 10, 20, 30,40, 50]

if (numeros.length %2== 0){
    mediana = numeros[numeros.length / 2] + numeros[numeros.length / 2 - 1] / 2
} 
else{
    mediana = numeros[Math.floor(numeros.length / 2)] 
} 