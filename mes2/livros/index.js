import express from 'express';

const app = express();
const porta = 3000;

app.use(express.json());

app.get('/livros', (req, res) => {
    const livros = [
        {
id: 1,
titulo: "O Hobbit",
autor: "J. R. R. Tolkien",
ano: 1937,
genero: "Fantasia"
}];
    res.json(livros);
});

 if (!id|| !titulo || !autor || !ano || !genero) {
    return res.status(400).send({ mensagem: "Todos os campos (id, titulo, autor, ano, genero) são obrigatórios." });
  }

  if (estudantes.length === 0) {
    id = 1;
  } else {
    id = estudantes[estudantes.length - 1].id + 1;
  }

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
