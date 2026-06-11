const prompt = require ('prompt-sync')();
let notas =parseInt(prompt("Digite a nota de 0 a 100:")) 
switch (true){
    case notas>=90&&notas <=100:
        console.log("nota A");
        break;
    case notas>=80&&notas<90:
        console.log("nota B");
        break;
    case notas>=70&& notas<79:
        console.log("nota C");
        break;
    case notas>=60&&notas<69:
        console.log(" nota D");
        break;
    case notas>=0&&notas<59:
        console.log("nota F");
        break;
    default:
        console.log("Nota inválida");
        break;
    }