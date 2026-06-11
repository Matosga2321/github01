import express from "express"
import filmes  from "./filmes.js"
const app = express()
const porta = 3333
app.use(express.json())
let proximoid = filmes.length + 1


app.get("/", (req, res) => {
  res.send("Rodando na porta :"+porta);
});

app.listen(porta, () => {
    console.log(`Porta: ${porta}`);
    }); 

app.get("/filmes" ,(req, res)=>{
  res.send(filmes);
})

app.post("/filmes", (req, res) => {
  const { titulo, diretor, ano, genero} = req.body;
  
  const novoFilme = {
    id : proximoid++,
    titulo : titulo,
    diretor: diretor,
    ano: ano,
    genero : genero
  };
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
})
app.delete("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = filmes.findIndex(filme => filme.id === id);
  
  if (index !== -1) {
    filmes.splice(index, 1);
    res.status(204).json({ message :"filme deletado com sucesso"})
  } else {
    res.status(404).json({ message: "Filme não encontrado" });
  }
});
app.patch("/filmes/:id", (req, res) => {
  const { titulo, diretor, ano, genero} = req.body;
 const id = parseInt(req.params.id);
  const index = filmes.findIndex(filme => filme.id === id);
   if (index !== -1) {
    filmes[index].ano=ano;
    filmes[index].genero=genero
    filmes[index].titulo=titulo;
    filmes[index].diretor=diretor;
    res.status(204).json({ message :"filme atualizado com sucesso"})
  } else {
    res.status(404).json({ message: "Filme não encontrado" });
  }
})
