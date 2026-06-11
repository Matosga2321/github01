// 1. Importa a biblioteca do Express
import express from 'express';

// 2. Inicializa o aplicativo Express
const app = express();

// 3. Define a porta onde a API vai rodar
const PORT = 3000;

// Permite que a API entenda dados em formato JSON
app.use(express.json());

// 4. Cria a primeira "Rota" (Endpoint). 
// Quando alguém acessar http://localhost:3000/ ela responde um texto simples
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha primeira API local!');
});

// 5. Cria uma rota que devolve dados (simulando um banco de dados de produtos)
app.get('/produtos', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Teclado Mecânico', preco: 250.00 },
        { id: 2, nome: 'Mouse Gamer', preco: 150.00 },
        { id: 3, nome: 'Monitor 144hz', preco: 1200.00, estoque: 10 }
    ];
    
    // Envia a lista de produtos em formato JSON
    res.json(produtos);
});

// 6. Faz o servidor "ligar" e ficar escutando os pedidos na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});