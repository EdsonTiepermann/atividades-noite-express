const barbeiro_controller = require("../controllers/barbeiro.js")
let nextId = 1

const model = (body, id = nextId++) => {
    if(body.nome != undefined &&
        body.nome != "" &&
        body.preco != undefined &&
        body.preco > 0 &&
        body.duracao_minutos != undefined &&
        body.duracao_minutos > 0 &&
        barbeiro_controller.show(body.barbeiro_id)
    ) {
        return {
            id,
            nome: body.nome,
            preco: body.preco,
            duracao_minutos: body.duracao_minutos,
            barbeiro_id: body.barbeiro_id
        }
    }
}

module.exports = model