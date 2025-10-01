// importa o express
const express = require('express')

// crio uma instância do express
const app = express()

//configurar e mapear os intermediários
const cors = require('cors')
app.use(cors()) //habilitar o CORS do browser
app.use(express.json()) //receber JSON no body da requisição

// mapear os meus routes
const pessoasRouter = require('./routes/Pessoas.js')
app.use(pessoasRouter)

// excecutar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})