const express = require('express')
const router = express.Router()
const Tarefa = require('../models/TarefaModel')
const { validarID } = require('../validators/IDValidator')
const { validarNovaTarefa, validarAtualizacaoTarefa } = require('../validators/TarefaValidator')

// CREATE
router.post('/', validarNovaTarefa, async (req, res) => {
  try {
    const novaTarefa = await Tarefa.create(req.body)
    const tarefaPopulada = await Tarefa.findById(novaTarefa._id)
      .populate('projeto')
      .populate('responsavel')
    res.status(201).json(tarefaPopulada)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar tarefa', detalhes: err.message })
  }
})

// READ - listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tarefas = await Tarefa.find()
      .populate('projeto')
      .populate('responsavel')
    res.json(tarefas)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar tarefas', detalhes: err.message })
  }
})

// READ - buscar tarefa por ID
router.get('/:id', validarID, async (req, res) => {
  try {
    const tarefa = await Tarefa.findById(req.params.id)
      .populate('projeto')
      .populate('responsavel')
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' })
    res.json(tarefa)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar tarefa', detalhes: err.message })
  }
})

// UPDATE
router.put('/:id', validarID, validarAtualizacaoTarefa, async (req, res) => {
  try {
    const atualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('projeto')
      .populate('responsavel')
    if (!atualizada) return res.status(404).json({ erro: 'Tarefa não encontrada' })
    res.json(atualizada)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar tarefa', detalhes: err.message })
  }
})

// DELETE
router.delete('/:id', validarID, async (req, res) => {
  try {
    const removida = await Tarefa.findByIdAndDelete(req.params.id)
    if (!removida) return res.status(404).json({ erro: 'Tarefa não encontrada' })
    res.json({ mensagem: 'Tarefa removida com sucesso!' })
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao remover tarefa', detalhes: err.message })
  }
})

module.exports = router
