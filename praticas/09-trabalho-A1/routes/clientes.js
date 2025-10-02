const express = require('express')
const router = express.Router()

let clientes = [
  { id: 1, nome: "Carlos Mendes", email: "carlos@email.com", telefone: "61999998888", cpf: "12345678900" },
  { id: 2, nome: "Fernanda Lima", email: "fernanda@email.com", telefone: "61988887777", cpf: "98765432100" }
]

// GET /clientes
router.get('/clientes', (req, res) => res.json(clientes))

// GET /clientes/:id
router.get('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id == req.params.id)
  if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" })
  res.json(cliente)
})

// POST /clientes
router.post('/clientes', (req, res) => {
  const { nome, email, telefone, cpf } = req.body
  if (!nome || !email || !telefone || !cpf) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }
  if (clientes.some(c => c.cpf === cpf)) {
    return res.status(409).json({ error: "CPF já cadastrado" })
  }

  const novoCliente = { id: Date.now(), nome, email, telefone, cpf }
  clientes.push(novoCliente)
  res.status(201).json({ message: "Cliente cadastrado com sucesso", novoCliente })
})

// PUT /clientes/:id
router.put('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id == req.params.id)
  if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" })

  const { nome, email, telefone } = req.body
  if (!nome || !email || !telefone) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  cliente.nome = nome
  cliente.email = email
  cliente.telefone = telefone
  res.json({ message: "Cliente atualizado com sucesso", cliente })
})

// DELETE /clientes/:id
router.delete('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id == req.params.id)
  if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" })
  clientes = clientes.filter(c => c.id != req.params.id)
  res.json({ message: "Cliente removido com sucesso" })
})

module.exports = router
