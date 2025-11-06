// src/controllers/ProjetoController.js
const express = require('express')
const router = express.Router()
const Projeto = require('../models/ProjetoModel')

// Listar todos
router.get('/', async (req, res) => {
  const projetos = await Projeto.find()
  res.json(projetos)
})

// Criar
router.post('/', async (req, res) => {
  const projeto = await Projeto.create(req.body)
  res.status(201).json(projeto)
})

// Buscar por ID
router.get('/:id', async (req, res) => {
  const projeto = await Projeto.findById(req.params.id)
  if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' })
  res.json(projeto)
})

// Atualizar
router.put('/:id', async (req, res) => {
  const atualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!atualizado) return res.status(404).json({ erro: 'Projeto não encontrado' })
  res.json(atualizado)
})

// Remover
router.delete('/:id', async (req, res) => {
  const removido = await Projeto.findByIdAndDelete(req.params.id)
  if (!removido) return res.status(404).json({ erro: 'Projeto não encontrado' })
  res.json({ mensagem: 'Projeto removido com sucesso!' })
})

module.exports = router
