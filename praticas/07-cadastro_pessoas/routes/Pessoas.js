const express = require('express')
const router = express.Router()

// lista de pessoas para simular o banco de dados
let listaPessoas = [
{
    id: 1,
    nome: "Freud",
    cpf: "00100100101",
    email: "freudcastelo@gmail.com",
    dataNascimento: '17/02/2002'
},
{
    id: 2,
    nome: "João",
    cpf: "00100100102",
    email: "joao@gmail.com",
    dataNascimento: '01/02/2004'
}
]


//mapear as rotas e a lógica

// #Busca
// GET /pessoas
router.get('/pessoas', (req, res, next) => {
    res.json(listaPessoas)
})
// exportar o roteador
module.exports = router