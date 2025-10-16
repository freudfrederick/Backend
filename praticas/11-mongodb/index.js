// === index.js ===
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()
app.use(express.json())

// Conexão com MongoDB Atlas
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Include`

mongoose.connect(url)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.log("Erro ao conectar no banco MongoDB:", err))

// === Model (Collection de Livros) ===
const LivroModel = mongoose.model('Livros', new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: String,
  ano: Number,
  preco: Number
}))

// === CRUD ===

// CREATE
app.post('/livros', async (req, res) => {
  const livro = req.body

  if (!livro.titulo || !livro.autor) {
    return res.status(400).json({ erro: "Campos obrigatórios: título e autor!" })
  }

  try {
    const novoLivro = await LivroModel.create(livro)
    res.status(201).json(novoLivro)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar livro" })
  }
})

// READ (todos)
app.get('/livros', async (req, res) => {
  try {
    const livros = await LivroModel.find()
    res.json(livros)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao listar livros" })
  }
})

// READ (por ID)
app.get('/livros/:id', async (req, res) => {
  try {
    const livro = await LivroModel.findById(req.params.id)
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado!" })
    res.json(livro)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar livro" })
  }
})

// UPDATE
app.put('/livros/:id', async (req, res) => {
  const livro = req.body

  if (!livro.titulo || !livro.autor) {
    return res.status(400).json({ erro: "Campos obrigatórios: título e autor!" })
  }

  try {
    const atualizado = await LivroModel.findByIdAndUpdate(req.params.id, livro, { new: true })
    if (!atualizado) return res.status(404).json({ erro: "Livro não encontrado!" })
    res.json(atualizado)
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar livro" })
  }
})

// DELETE
app.delete('/livros/:id', async (req, res) => {
  try {
    const removido = await LivroModel.findByIdAndDelete(req.params.id)
    if (!removido) return res.status(404).json({ erro: "Livro não encontrado!" })
    res.json({ mensagem: "Livro excluído com sucesso!" })
  } catch (err) {
    res.status(500).json({ erro: "Erro ao excluir livro" })
  }
})

// START
app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000")
})