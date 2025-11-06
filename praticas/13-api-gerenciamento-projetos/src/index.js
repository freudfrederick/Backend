require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const DepartamentoController = require('./controllers/DepartamentoController')
const CargoController = require('./controllers/CargoController')
const FuncionarioController = require('./controllers/FuncionarioController')
const ProjetoController = require('./controllers/ProjetoController')
const TarefaController = require('./controllers/TarefaController')

console.log({
  DepartamentoController,
  CargoController,
  FuncionarioController,
  ProjetoController,
  TarefaController
})


const app = express()
app.use(express.json())

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro ao conectar:', err))

app.use('/departamentos', DepartamentoController)
app.use('/cargos', CargoController)
app.use('/funcionarios', FuncionarioController)
app.use('/projetos', ProjetoController)
app.use('/tarefas', TarefaController)

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'))
