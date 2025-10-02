const express = require('express')
const router = express.Router()

let vendas = [
  { id: 1, clienteId: 1, vendedorId: 1, carroId: 1, dataVenda: "2025-10-01", valorVenda: 120000 },
  { id: 2, clienteId: 2, vendedorId: 2, carroId: 2, dataVenda: "2025-10-02", valorVenda: 130000 }
]

// GET /vendas
router.get('/vendas', (req, res) => res.json(vendas))

// GET /vendas/:id
router.get('/vendas/:id', (req, res) => {
  const venda = vendas.find(v => v.id == req.params.id)
  if (!venda) return res.status(404).json({ error: "Venda não encontrada" })
  res.json(venda)
})

// POST /vendas
router.post('/vendas', (req, res) => {
  const { clienteId, vendedorId, carroId, dataVenda, valorVenda } = req.body
  if (!clienteId || !vendedorId || !carroId || !dataVenda || !valorVenda) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  const novaVenda = { id: Date.now(), clienteId, vendedorId, carroId, dataVenda, valorVenda }
  vendas.push(novaVenda)
  res.status(201).json({ message: "Venda cadastrada com sucesso", novaVenda })
})

// PUT /vendas/:id
router.put('/vendas/:id', (req, res) => {
  const venda = vendas.find(v => v.id == req.params.id)
  if (!venda) return res.status(404).json({ error: "Venda não encontrada" })

  const { clienteId, vendedorId, carroId, dataVenda, valorVenda } = req.body
  if (!clienteId || !vendedorId || !carroId || !dataVenda || !valorVenda) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  venda.clienteId = clienteId
  venda.vendedorId = vendedorId
  venda.carroId = carroId
  venda.dataVenda = dataVenda
  venda.valorVenda = valorVenda

  res.json({ message: "Venda atualizada com sucesso", venda })
})

// DELETE /vendas/:id
router.delete('/vendas/:id', (req, res) => {
  const venda = vendas.find(v => v.id == req.params.id)
  if (!venda) return res.status(404).json({ error: "Venda não encontrada" })
  vendas = vendas.filter(v => v.id != req.params.id)
  res.json({ message: "Venda removida com sucesso" })
})

module.exports = router
