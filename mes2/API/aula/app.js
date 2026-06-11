import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express()
const port = 3000

const conectDB = async() =>{
    try {
          await mongoose.connect(process.env.MONGO_URI)
    console.log("conectado ao mongoDB");
    } catch (error) {
        console.log(" deu erro ao conectar ao mongoDB", error);
        
    }
}
conectDB()


app.listen(port, ()=> console.log(`o servidor esta rodando na ${port}`))
