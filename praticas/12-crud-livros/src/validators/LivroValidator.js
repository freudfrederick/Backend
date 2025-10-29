const yup = require('yup')

// Esquema para criar novo livro
const schemaNovoLivro = yup.object().shape({
  titulo: yup.string().required("O campo título é obrigatório"),
  autor: yup.string().required("O campo autor é obrigatório"),
  editora: yup.string().required("O campo editora é obrigatório"),
  ano: yup.number().typeError("O campo ano deve ser numérico").required("O campo ano é obrigatório"),
  preco: yup.number().positive("O preço deve ser positivo").typeError("O campo preço deve ser numérico").required("O campo preço é obrigatório"),
})

// Esquema para atualizar livro (campos opcionais)
const schemaAtualizarLivro = yup.object().shape({
  titulo: yup.string(),
  autor: yup.string(),
  editora: yup.string(),
  ano: yup.number().typeError("O campo ano deve ser numérico"),
  preco: yup.number().positive("O preço deve ser positivo").typeError("O campo preço deve ser numérico"),
})

// Middleware: validar novo livro
async function validarNovoLivro(req, res, next) {
  try {
    await schemaNovoLivro.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

// Middleware: validar atualização
async function validarAtualizacaoLivro(req, res, next) {
  try {
    await schemaAtualizarLivro.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

module.exports = { validarNovoLivro, validarAtualizacaoLivro }
