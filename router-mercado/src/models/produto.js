const mercado_controller = require("../controllers/mercado.js")
const fornecedor_controller = require("../controllers/fornecedor.js")
let nextId = 1

const model = (body, id = nextId++) => {
    if(body.nome != undefined &&
        body.nome != "" &&
        body.quantidade != undefined &&
        body.quantidade > 0 &&
        mercado_controller.show(body.mercado_id),
        fornecedor_controller.show(body.fornecedor_id )
    ) {
        return {
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            mercado_id: body.mercado_id,
            fornecedor_id: body.fornecedor_id
        }
    }
}

module.exports = model