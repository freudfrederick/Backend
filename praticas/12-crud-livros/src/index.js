require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const LivroController = require('./controllers/LivroController')

const app = express()
app.use(express.json())

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.log("❌ Erro ao conectar ao MongoDB:", err))

app.use('/livros', LivroController)

app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"))
