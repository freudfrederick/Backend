const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// importar rotas
const vendedoresRouter = require('./routes/vendedores')
const clientesRouter = require('./routes/clientes')
const carrosRouter = require('./routes/carros')
const fornecedoresRouter = require('./routes/fornecedores')
const vendasRouter = require('./routes/vendas')

app.use(vendedoresRouter)
app.use(clientesRouter)
app.use(carrosRouter)
app.use(fornecedoresRouter)
app.use(vendasRouter)

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
