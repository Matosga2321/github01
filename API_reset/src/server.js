import express from "express";
import dotenv from "dotenv";
import matricula from "./models/matriculas.js"
import conectarDB from "./db.js";

dotenv.config({path: "../.env"});
const app = express();
const PORT = process.env.PORT;
conectarDB();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Conectado com a porta ${PORT} com sucesso!`);
});

app.get("/", (req, res) => {

  res.json({ mensagem: "API da academia está no ar!" });
});

app.post("/matricula", async (req, res) => {
  try {
    const { nomeAluno, idade, modalidade, plano, dataMatricula, matricula} = req.body;

    let valorTotal = 0;
    let valorMensal= 0
    if (modalidade == "Musculação") {
      switch (modalidade) {
        case "Mensal":
          valorMensal = 90;
          valorTotal = 90
          break;
        case "Trimestral":
          valorMensal= 90*0.9;
          valorTotal = valorMensal*3
          break;
        case "Semestral":
          valorMensal = 90*0.15;
          valorTotal = valorMensal*6
          break;
        default:
          console.log("Serviço inválido!");
          break;
      }
    }

    if (modalidade == "Funcional") {
      switch (modalidade) {
        case "Mensal":
          valorMensal = 120
          valorTotal = valorMensal
          break;
        case "Trimestral":
          valorMensal = 120*0.12;
          valorTotal = valorMensal*3
          break;
        case "Semestral":
          valorMensal = 120*0.15
        valorTotal = valorMensal*6
          break;
        default:
          console.log("Serviço inválido!");
          break;
      }
    }

    if (modalidade == "Dança") {
      switch (modalidade) {
        case "Mensal":
          console.log("vc pegou o plano mensal")
          valorMensal = 100;
          valorTotal = valorMensal
          break;
        case "Trimestral":
            console.log("vc pegou o plano trimestral tem 10% de desconto")
          valorMensal = 100*0.10
          valorTotal = valorMensal*3
          break;
        case "Semestral":
          Desconto = console.log("vc pegou o plano semestral, tem direito a 15% de desconto")
          valorMensal = 100*0.15
           valorTotal = valorMensal*3
          break;
        default:
          console.log("Serviço inválido!");
          break;
      }
    }

    const novoMatricula = new Matricula ({
      nomeAluno,
      idade,
      modalidade,
      plano,
      dataMatricula,
    });

    await novoMatricula.save();

    res.status(201).json({ mensagem: "Agendamento criado com sucesso!", agendamento: novoAgendamento });
  } catch (erro) {
    res.status(400).json({ mensagem: `Erro ao criar o agendamento: ${erro.message}` });
  }
});
