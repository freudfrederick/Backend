const yup = require('yup')

const schemaNovoCargo = yup.object().shape({
  nome: yup.string().required('O campo nome é obrigatório'),
  descricao: yup.string().required('O campo descricao é obrigatório'),
  salario: yup.number().min(1518, 'O salário mínimo é R$ 1.518,00').required('O campo salário é obrigatório')
})

const schemaAtualizarCargo = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  salario: yup.number().min(1518, 'O salário mínimo é R$ 1.518,00')
})

async function validarNovoCargo(req, res, next) {
  try {
    await schemaNovoCargo.validate(req.body, { abortEarly: false })
    next()
  } catch (err) {
    return res.status(400).json({ erros: err.errors })
  }
}

async function validarAtualizacaoCargo(req, res, next) {
  try {
    await schemaAtualizarCargo.validate(req.body, { abortEarly: false })
    next()
  } catch (err) {
    return res.status(400).json({ erros: err.errors })
  }
}

module.exports = { validarNovoCargo, validarAtualizacaoCargo }
