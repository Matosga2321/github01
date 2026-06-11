import express from "express"
import livros from "./livros.js"

const app = express()
const porta = 5000
app.use(express.json())
let proximoid = livros.length + 1

app.get("/", (req, res) => {
  res.send("Rodando na porta :"+porta);
});

app.listen(porta, () => {
    console.log(`Porta: ${porta}`);
    }); 

app.get("/livros" ,(req, res)=>{
  res.send(livros);
})

app.post("/livros", (req, res) => {
  const { titulo, autor, ano, genero} = req.body;
  
  const novoLivro = {
    id : proximoid++,
    titulo : titulo,
    autor : autor,
    ano: ano,
    genero : genero
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
})
app.delete("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex(livros => livros.id === id);
  
  if (index !== -1) {
    livros.splice(index, 1);
    res.status(204).json({ message :"livro deletado com sucesso"})
  } else {
    res.status(404).json({ message: "livro não encontrado" });
  }
});
app.patch("/livros/:id", (req, res) => {
  const { titulo, autor, ano, genero} = req.body;
 const id = parseInt(req.params.id);
  const index = livros.findIndex(livros => livros.id === id);
   if (index !== -1) {
    livros[index].ano=ano;
    livros[index].genero=genero
    livros[index].titulo=titulo;
    livros[index].autor=autor;
    res.status(204).json({ message :"livro atualizado com sucesso"})
  } else {
    res.status(404).json({ message: "livro não encontrado" });
  }
})