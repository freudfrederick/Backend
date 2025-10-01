const express = require('express')
const router = express.Router()

let listaProfessores = [
  {
    id: 1,
    nome: "Freud",
    email: "freud@iesb.com",
    cpf: "33333333333",
    curso: "ADS",
    disciplina: "Banco de Dados"
  },
  {
    id: 2,
    nome: "Fernanda",
    email: "fernanda@escola.com",
    cpf: "44444444444",
    curso: "Medicina",
    disciplina: "Cálculo"
  },
]

// GET /professores
router.get('/professores', (req, res) => {
  res.json(listaProfessores)
})

// GET /professores/:id
router.get('/professores/:id', (req, res) => {
  const id = req.params.id
  const professor = listaProfessores.find(prof => prof.id == id)
  if (!professor) return res.status(404).json({ error: "Professor não encontrado" })
  res.json(professor)
})

// POST /professores
router.post('/professores', (req, res) => {
  const { nome, email, cpf, curso, disciplina } = req.body
  if (!nome || !email || !cpf || !curso || !disciplina) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }
  if (listaProfessores.some(prof => prof.cpf === cpf)) {
    return res.status(409).json({ error: "CPF já cadastrado" })
  }

  const novoProfessor = { id: Date.now(), nome, email, cpf, curso, disciplina }
  listaProfessores.push(novoProfessor)
  res.status(201).json({ message: "Professor cadastrado com sucesso", novoProfessor })
})

// PUT /professores/:id
router.put('/professores/:id', (req, res) => {
  const id = req.params.id
  const professor = listaProfessores.find(prof => prof.id == id)
  if (!professor) return res.status(404).json({ error: "Professor não encontrado" })

  const { nome, email, curso, disciplina } = req.body
  if (!nome || !email || !curso || !disciplina) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  professor.nome = nome
  professor.email = email
  professor.curso = curso
  professor.disciplina = disciplina

  res.json({ message: "Professor atualizado com sucesso", professor })
})

// DELETE /professores/:id
router.delete('/professores/:id', (req, res) => {
  const id = req.params.id
  const professor = listaProfessores.find(prof => prof.id == id)
  if (!professor) return res.status(404).json({ error: "Professor não encontrado" })

  listaProfessores = listaProfessores.filter(prof => prof.id != id)
  res.json({ message: "Professor excluído com sucesso" })
})

module.exports = router