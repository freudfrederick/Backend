const yup = require('yup')

// Esquema para criação de nova tarefa
const schemaNovaTarefa = yup.object().shape({
  titulo: yup.string().required('O campo título é obrigatório'),
  descricao: yup.string().required('O campo descrição é obrigatório'),
  dataInicio: yup.date().required('O campo dataInicio é obrigatório'),
  dataFim: yup.date().required('O campo dataFim é obrigatório'),
  responsavel: yup.string().required('O campo responsavel é obrigatório'),
  projeto: yup.string().required('O campo projeto é obrigatório')
})

// Esquema para atualização de tarefa
const schemaAtualizacaoTarefa = yup.object().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date(),
  dataFim: yup.date(),
  responsavel: yup.string(),
  projeto: yup.string()
})

// Middleware para validar nova tarefa
async function validarNovaTarefa(req, res, next) {
  try {
    await schemaNovaTarefa.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

// Middleware para validar atualização de tarefa
async function validarAtualizacaoTarefa(req, res, next) {
  try {
    await schemaAtualizacaoTarefa.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

module.exports = {
  validarNovaTarefa,
  validarAtualizacaoTarefa
}
