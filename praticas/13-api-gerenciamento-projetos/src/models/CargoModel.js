const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  salario: { type: Number, required: true, min: 1518 }
}, { timestamps: true })

module.exports = mongoose.model('Cargos', schema)
