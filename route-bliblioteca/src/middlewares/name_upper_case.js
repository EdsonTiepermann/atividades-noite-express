const name_upper_case = (req, res, next) => {
    req.body.nome = req.body.nome.toUpperCase()
    // req.body.curso = req.body.curso.toUpperCase()
    next()
}

module.exports = name_upper_case