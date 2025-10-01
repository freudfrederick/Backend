const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// importar rotas
const alunosRouter = require('./routes/alunos')
const professoresRouter = require('./routes/professores')

app.use(alunosRouter)
app.use(professoresRouter)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
