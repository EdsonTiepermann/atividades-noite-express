const axios = require("axios")

const cep_endereco = (req, res, next) => {
 axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
 .then(resposta => {
    
    delete req.body.cep

    req.body.endereco = resposta.data

    next()
 })
}

module.exports = cep_endereco