const express = require('express')
const router = express.Router()
const Funcionario = require('../models/FuncionarioModel')
const { validarID } = require('../validators/IDValidator')

router.get('/', async (req, res) => {
  const funcionarios = await Funcionario.find().populate(['cargo', 'departamento'])
  res.json(funcionarios)
})

router.get('/:id', validarID, async (req, res) => {
  const funcionario = await Funcionario.findById(req.params.id).populate(['cargo', 'departamento'])
  if (!funcionario) return res.status(404).json({ erro: 'Funcionário não encontrado' })
  res.json(funcionario)
})

router.post('/', async (req, res) => {
  const novo = await Funcionario.create(req.body)
  res.status(201).json(novo)
})

router.put('/:id', validarID, async (req, res) => {
  const atualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!atualizado) return res.status(404).json({ erro: 'Funcionário não encontrado' })
  res.json(atualizado)
})

router.delete('/:id', validarID, async (req, res) => {
  const removido = await Funcionario.findByIdAndDelete(req.params.id)
  if (!removido) return res.status(404).json({ erro: 'Funcionário não encontrado' })
  res.json({ mensagem: 'Funcionário removido com sucesso!' })
})

module.exports = router
