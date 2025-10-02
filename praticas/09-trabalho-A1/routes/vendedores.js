const express = require('express')
const router = express.Router()

let vendedores = [
  { id: 1, nome: "João Silva", email: "joao@concessionaria.com", telefone: "61999998888", cpf: "11111111111" },
  { id: 2, nome: "Maria Souza", email: "maria@concessionaria.com", telefone: "61988887777", cpf: "22222222222" }
]

// GET /vendedores
router.get('/vendedores', (req, res) => res.json(vendedores))

// GET /vendedores/:id
router.get('/vendedores/:id', (req, res) => {
  const vendedor = vendedores.find(v => v.id == req.params.id)
  if (!vendedor) return res.status(404).json({ error: "Vendedor não encontrado" })
  res.json(vendedor)
})

// POST /vendedores
router.post('/vendedores', (req, res) => {
  const { nome, email, telefone, cpf } = req.body
  if (!nome || !email || !telefone || !cpf) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }
  if (vendedores.some(v => v.cpf === cpf)) {
    return res.status(409).json({ error: "CPF já cadastrado" })
  }

  const novoVendedor = { id: Date.now(), nome, email, telefone, cpf }
  vendedores.push(novoVendedor)
  res.status(201).json({ message: "Vendedor cadastrado com sucesso", novoVendedor })
})

// PUT /vendedores/:id
router.put('/vendedores/:id', (req, res) => {
  const vendedor = vendedores.find(v => v.id == req.params.id)
  if (!vendedor) return res.status(404).json({ error: "Vendedor não encontrado" })

  const { nome, email, telefone } = req.body
  if (!nome || !email || !telefone) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  vendedor.nome = nome
  vendedor.email = email
  vendedor.telefone = telefone
  res.json({ message: "Vendedor atualizado com sucesso", vendedor })
})

// DELETE /vendedores/:id
router.delete('/vendedores/:id', (req, res) => {
  const vendedor = vendedores.find(v => v.id == req.params.id)
  if (!vendedor) return res.status(404).json({ error: "Vendedor não encontrado" })
  vendedores = vendedores.filter(v => v.id != req.params.id)
  res.json({ message: "Vendedor removido com sucesso" })
})

module.exports = router