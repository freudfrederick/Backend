const express = require('express')
const router = express.Router()

let listaAlunos = [
  {
    id: 1,
    nome: "Ana",
    email: "ana@escola.com",
    cpf: "11111111111",
    telefone: "61999990000",
    dataNascimento: "10/05/2001"
  },
  {
    id: 2,
    nome: "Carlos",
    email: "carlos@escola.com",
    cpf: "22222222222",
    telefone: "61988887777",
    dataNascimento: "20/08/2000"
  },
]

// GET /alunos
router.get('/alunos', (req, res) => {
  res.json(listaAlunos)
})

// GET /alunos/:id
router.get('/alunos/:id', (req, res) => {
  const id = req.params.id
  const aluno = listaAlunos.find(aluno => aluno.id == id)
  if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" })
  res.json(aluno)
})

// POST /alunos
router.post('/alunos', (req, res) => {
  const { nome, email, cpf, telefone, dataNascimento } = req.body
  if (!nome || !email || !cpf || !telefone || !dataNascimento) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }
  if (listaAlunos.some(aluno => aluno.cpf === cpf)) {
    return res.status(409).json({ error: "CPF já cadastrado" })
  }

  const novoAluno = { id: Date.now(), nome, email, cpf, telefone, dataNascimento }
  listaAlunos.push(novoAluno)
  res.status(201).json({ message: "Aluno cadastrado com sucesso", novoAluno })
})

// PUT /alunos/:id
router.put('/alunos/:id', (req, res) => {
  const id = req.params.id
  const aluno = listaAlunos.find(aluno => aluno.id == id)
  if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" })

  const { nome, email, telefone, dataNascimento } = req.body
  if (!nome || !email || !telefone || !dataNascimento) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  aluno.nome = nome
  aluno.email = email
  aluno.telefone = telefone
  aluno.dataNascimento = dataNascimento

  res.json({ message: "Aluno atualizado com sucesso", aluno })
})

// DELETE /alunos/:id
router.delete('/alunos/:id', (req, res) => {
  const id = req.params.id
  const aluno = listaAlunos.find(aluno => aluno.id == id)
  if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" })

  listaAlunos = listaAlunos.filter(aluno => aluno.id != id)
  res.json({ message: "Aluno excluído com sucesso" })
})

module.exports = router
