const express = require('express')
const router = express.Router()
const Livro = require('../models/Livro')
const { validarNovoLivro, validarAtualizacaoLivro } = require('../validators/LivroValidator')
const { validarID } = require('../validators/IDValidator')

// CREATE
router.post('/', validarNovoLivro, async (req, res) => {
  try {
    const novoLivro = await Livro.create(req.body)
    res.status(201).json(novoLivro)
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar livro" })
  }
})

// READ - todos
router.get('/', async (req, res) => {
  try {
    const livros = await Livro.find()
    res.json(livros)
  } catch (error) {
    res.status(500).json({ erro: "Erro ao listar livros" })
  }
})

// READ - por ID
router.get('/:id', validarID, async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id)
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" })
    res.json(livro)
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar livro" })
  }
})

// UPDATE
router.put('/:id', validarID, validarAtualizacaoLivro, async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" })
    res.json(livro)
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar livro" })
  }
})

// DELETE
router.delete('/:id', validarID, async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id)
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" })
    res.json({ mensagem: "Livro removido com sucesso" })
  } catch (error) {
    res.status(500).json({ erro: "Erro ao remover livro" })
  }
})

module.exports = router
