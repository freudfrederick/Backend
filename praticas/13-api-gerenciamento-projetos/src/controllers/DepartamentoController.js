const express = require('express')
const router = express.Router()
const Departamento = require('../models/DepartamentoModel')

// exemplo de rota
router.get('/', async (req, res) => {
  const departamentos = await Departamento.find()
  res.json(departamentos)
})

// exportar o router!
module.exports = router
