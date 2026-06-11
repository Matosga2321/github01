
const prompt = require ("prompt-sync")()
let listadetarefas = []
let tarefa1 = prompt(`Já lavou a louça?`)
listadetarefas.push(tarefa1)
let tarefa2 = prompt(`Já secou a louça?`)
listadetarefas.push(tarefa2)
let tarefa3 =(`guardar a louça`)
listadetarefas.push(tarefa3)
listadetarefas.pop
console.log (listadetarefas)