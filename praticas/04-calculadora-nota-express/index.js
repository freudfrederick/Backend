// importa o express
const express = require('express')

// crio uma instância do express
const app = express()

// Middlewares (Intermediários)
// Intermediário de log
app.use((req, rest, next) => {
    console.log("------------####--------------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Método: ", req.method)
    console.log("Rota> ", req.url)
})









// executar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http:localhost:3000")
})