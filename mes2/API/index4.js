import express from "express"
import estudantes from "./estudantes.js"

const app = express()
const porta = 3333
app.use(express.json())
let proximoid = estudantes.length + 1


app.get("/", (req, res) => {
  res.send("Rodando na porta :"+porta);
});

app.listen(porta, () => {
    console.log(`Porta: ${porta}`);
    }); 

app.get("/estudantes" ,(req, res)=>{
  res.send(estudantes);
})

app.post("/estudantes", (req, res) => {
  const { nome, matricula, curso, ano} = req.body;
  
  const novoaluno = {
    id : proximoid++,
    nome : nome, 
    matricula : matricula,
    ano: ano,
    curso : curso
  };
  estudantes.push(novoaluno);
  res.status(201).json(novoaluno);
})
app.delete("/estudante/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = estudantes.findIndex(estudantes => estudantes.id === id);
  
  if (index !== -1) {
    estudantes.splice(index, 1);
    res.status(204).json({ message :"aluno deletado com sucesso"})
  } else {
    res.status(404).json({ message: "aluno  não encontrado" });
  }
});
app.patch("/estudante/:id", (req, res) => {
  const { titulo, diretor, ano, genero} = req.body;
 const id = parseInt(req.params.id);
  const index = estudantes.findIndex(estudantes => estudantes.id === id);
   if (index !== -1) {
    estudantes[index].ano=ano;
    estudantes[index].genero=genero
    estudantes[index].titulo=titulo;
    estudantes[index].diretor=diretor;
    res.status(204).json({ message :"estudante atualizado com sucesso"})
  } else {
    res.status(404).json({ message: "estudante não encontrado" });
  }
})