import mongoose from "mongoose"

const MatriculaSchema = new mongoose.Schema({
  nomeAluno: {
    type: String,
    required: [true, "O nome do aluno é obrigatório."],
  },
  idade: {
    type: Number,
    required: [true, " A idade é obrigatória"],
  },
  modalidade: {
    type: String,
    required: [true, "O nome do dono é obrigatório."],
     enum:{
        values : ["Musculação", "Funcional", "Dança"],
        message : " As modalidades devem, ser Musculação, Funcional ou Dança"
  }
},
  plano : {
    type: String,
    required: [true, "O plano é obrigatório"],
        enum: {
            values : ["Mensal", "Trimestral", "Semestral"],
            message: "é obrigatório assinar um plano"
  }
},
  dataMatricula: {
    type: String,
    required: [true, "é obrigatório a data da matricula"],
  },
  valorMensal: {
    type: Number
  },
  valorTotal:{
    type : Number
  },
  status: {
    type: String,
    default: "Ativa",
    enum: {
      values: ["Ativa", "Pausada", "Cancelado"],
    },
  },
});

const matricula = mongoose.model("matricula", MatriculaSchema);

export default matricula;