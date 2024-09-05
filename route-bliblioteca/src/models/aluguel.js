const livro_controller = require("../controllers/livro.js")
const estudante_controller = require("../controllers/estudante.js")

let nextId = 1

const model = (body, id = nextId++) => {
    const data_aluguel = new Date().toISOString().split("T")[0];

    const data_devolucao = body.data_devolucao ? new Date(body.data_devolucao).toISOString().split("T")[0] : null;

    if(
        livro_controller.show(body.livro_id) &&
        estudante_controller.show(body.estudante_id )
    ) {
        return {
            id,
            data_aluguel: data_aluguel,
            data_devolucao: data_devolucao,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id
        }
    }
}

module.exports = model