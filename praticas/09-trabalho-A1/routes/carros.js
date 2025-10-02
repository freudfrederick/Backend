const express = require('express')
const router = express.Router()

let carros = [
  { id: 1, modelo: "Civic", marca: "Honda", ano: 2020, preco: 120000 },
  { id: 2, modelo: "Corolla", marca: "Toyota", ano: 2021, preco: 130000 }
]

// GET /carros
router.get('/carros', (req, res) => res.json(carros))

// GET /carros/:id
router.get('/carros/:id', (req, res) => {
  const carro = carros.find(c => c.id == req.params.id)
  if (!carro) return res.status(404).json({ error: "Carro não encontrado" })
  res.json(carro)
})

// POST /carros
router.post('/carros', (req, res) => {
  const { modelo, marca, ano, preco } = req.body
  if (!modelo || !marca || !ano || !preco) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  const novoCarro = { id: Date.now(), modelo, marca, ano, preco }
  carros.push(novoCarro)
  res.status(201).json({ message: "Carro cadastrado com sucesso", novoCarro })
})

// PUT /carros/:id
router.put('/carros/:id', (req, res) => {
  const carro = carros.find(c => c.id == req.params.id)
  if (!carro) return res.status(404).json({ error: "Carro não encontrado" })

  const { modelo, marca, ano, preco } = req.body
  if (!modelo || !marca || !ano || !preco) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  carro.modelo = modelo
  carro.marca = marca
  carro.ano = ano
  carro.preco = preco
  res.json({ message: "Carro atualizado com sucesso", carro })
})

// DELETE /carros/:id
router.delete('/carros/:id', (req, res) => {
  const carro = carros.find(c => c.id == req.params.id)
  if (!carro) return res.status(404).json({ error: "Carro não encontrado" })
  carros = carros.filter(c => c.id != req.params.id)
  res.json({ message: "Carro removido com sucesso" })
})

module.exports = router
