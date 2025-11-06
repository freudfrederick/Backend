const express = require('express')
const router = express.Router()
const Cargo = require('../models/CargoModel')
const { validarID } = require('../validators/IDValidator')
const { validarNovoCargo, validarAtualizacaoCargo } = require('../validators/CargoValidator')

// CREATE
router.post('/', validarNovoCargo, async (req, res) => {
  try {
    const novoCargo = await Cargo.create(req.body)
    res.status(201).json(novoCargo)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar cargo', detalhes: err.message })
  }
})

// READ - listar todos
router.get('/', async (req, res) => {
  const cargos = await Cargo.find()
  res.json(cargos)
})

// READ - buscar por ID
router.get('/:id', validarID, async (req, res) => {
  const cargo = await Cargo.findById(req.params.id)
  if (!cargo) return res.status(404).json({ erro: 'Cargo não encontrado' })
  res.json(cargo)
})

// UPDATE
router.put('/:id', validarID, validarAtualizacaoCargo, async (req, res) => {
  const atualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!atualizado) return res.status(404).json({ erro: 'Cargo não encontrado' })
  res.json(atualizado)
})

// DELETE
router.delete('/:id', validarID, async (req, res) => {
  const removido = await Cargo.findByIdAndDelete(req.params.id)
  if (!removido) return res.status(404).json({ erro: 'Cargo não encontrado' })
  res.json({ mensagem: 'Cargo removido com sucesso!' })
})

module.exports = router
