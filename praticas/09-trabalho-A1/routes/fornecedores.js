const express = require('express')
const router = express.Router()

let fornecedores = [
  { id: 1, nome: "Auto Peças Brasília", cnpj: "12345678000199", telefone: "6133332222", email: "contato@autobras.com" },
  { id: 2, nome: "Distribuidora Carros Ltda", cnpj: "98765432000111", telefone: "6144443333", email: "vendas@carrosltda.com" }
]

// GET /fornecedores
router.get('/fornecedores', (req, res) => res.json(fornecedores))

// GET /fornecedores/:id
router.get('/fornecedores/:id', (req, res) => {
  const fornecedor = fornecedores.find(f => f.id == req.params.id)
  if (!fornecedor) return res.status(404).json({ error: "Fornecedor não encontrado" })
  res.json(fornecedor)
})

// POST /fornecedores
router.post('/fornecedores', (req, res) => {
  const { nome, cnpj, telefone, email } = req.body
  if (!nome || !cnpj || !telefone || !email) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }
  if (fornecedores.some(f => f.cnpj === cnpj)) {
    return res.status(409).json({ error: "CNPJ já cadastrado" })
  }

  const novoFornecedor = { id: Date.now(), nome, cnpj, telefone, email }
  fornecedores.push(novoFornecedor)
  res.status(201).json({ message: "Fornecedor cadastrado com sucesso", novoFornecedor })
})

// PUT /fornecedores/:id
router.put('/fornecedores/:id', (req, res) => {
  const fornecedor = fornecedores.find(f => f.id == req.params.id)
  if (!fornecedor) return res.status(404).json({ error: "Fornecedor não encontrado" })

  const { nome, telefone, email } = req.body
  if (!nome || !telefone || !email) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  fornecedor.nome = nome
  fornecedor.telefone = telefone
  fornecedor.email = email
  res.json({ message: "Fornecedor atualizado com sucesso", fornecedor })
})

// DELETE /fornecedores/:id
router.delete('/fornecedores/:id', (req, res) => {
  const fornecedor = fornecedores.find(f => f.id == req.params.id)
  if (!fornecedor) return res.status(404).json({ error: "Fornecedor não encontrado" })
  fornecedores = fornecedores.filter(f => f.id != req.params.id)
  res.json({ message: "Fornecedor removido com sucesso" })
})

module.exports = router