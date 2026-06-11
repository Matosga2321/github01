import mongoose from "mongoose";   

const agendamentoschema= new mongoose.Schema({
    nomepet: (
        type : String,
        required: [true ]
    )
})