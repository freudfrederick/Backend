const express = require('express');
const router = express.Router();

// soma
router.get('/somar', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos!' });
  }

  res.json({ resultado: a + b });
});

// subtração
router.get('/subtrair', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos!' });
  }

  res.json({ resultado: a - b });
});

// multiplicação
router.get('/multiplicar', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos!' });
  }

  res.json({ resultado: a * b });
});

// divisão
router.get('/dividir', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos!' });
  }
  if (b === 0) {
    return res.status(400).json({ erro: 'Divisão por zero não permitida!' });
  }

  res.json({ resultado: a / b });
});

// ao quadrado
router.get('/Quadrado', (req, res) => {
  const a = parseFloat(req.query.a);

  if (isNaN(a)) {
    return res.status(400).json({ erro: 'Parâmetro inválido!' });
  }

  res.json({ resultado: a * a });
});

// raiz quadrada
router.get('/raizQuadrada', (req, res) => {
  const a = parseFloat(req.query.a);

  if (isNaN(a)) {
    return res.status(400).json({ erro: 'Parâmetro inválido!' });
  }
  if (a < 0) {
    return res.status(400).json({ erro: 'Valor inválido para raiz quadrada!' });
  }

  res.json({ resultado: Math.sqrt(a) });
});

module.exports = router;