const prompt = require ("prompt-sync")()
let nome = prompt("nome")
let idade= parseInt(prompt ("idade"))
let raça = prompt ("raça")
let paciente ={}
paciente.nomec = nome
paciente.idadec= idade
paciente.raca= raça
if (paciente.idadec >=8){
    console.log(`O paciente ${paciente.nomec} já é sênior e precisa de exames de rotina`)
} else{
    console.log("Paciente na faixa de idade regular.")
}
console.log(paciente)
