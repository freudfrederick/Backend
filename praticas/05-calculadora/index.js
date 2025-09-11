const express = require('express');
const app = express();

// middleware de log
app.use((req, res, next) => {
  console.log('----------####----------');
  console.log('Tempo:', new Date().toLocaleString());
  console.log('Método:', req.method);
  console.log('Rota:', req.url);
  next();
});

// importa o router calculadora
const calculadoraRouter = require('./routes/calculadora.js');
app.use('/calculadora', calculadoraRouter);

// executa o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
