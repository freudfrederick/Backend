// importa o express
const express = require('express')

// crio uma instância do express
const app = express()

// Middlewares (Intermediários)
// Intermediário de log
app.use((req, res, next) => {
    console.log("------------####------------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Método: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get('/nome', (req, res, next) => {
    // Capturar informação do usuário através dos parametros da requisição
    
    const primeiroNome = req.query.primeiroNome
    const sobreNome = req.query.sobreNome

    res.send("Olá " + primeiroNome + " " + sobreNome + "!!!")
})

// Importando o router calculadora de nota
const calculadoraNotaRouter = require('./routes/CalculadoraNota.js')

//Toda requisição que chegar na rota /calculadora vai para router
app.use('/calculadora', calculadoraNotaRouter)

// executar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})