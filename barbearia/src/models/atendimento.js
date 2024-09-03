const cliente_controller = require("../controllers/cliente.js")
const servico_controller = require("../controllers/servico.js")

let nextId = 1

const validarServicos = servicos => servicos.every(servico => servico_controller.show(servico.servico_id) && servico.nota >= 0 && servico.nota <= 10)

const duracao = servicos => {
    let soma = 0

    servicos.forEach(servico => {
        soma += servico_controller.show(servico.servico_id).duracao_minutos
    })

    return soma
}

const preco = servicos => {
    let soma = 0

    servicos.forEach(servico => {
        soma += servico_controller.show(servico.servico_id).preco
    })

    return soma
}

const model = (body, id = nextId++) => {

    if (
        body.horario_inicio != undefined &&
        body.horario_inicio >= 0 &&
        cliente_controller.show(body.cliente_id),
        body.status_pagamento != undefined &&
        body.status_pagamento > 0 &&
        body.status_pagamento <= 10 &&
        Array.isArray(body.servicos) &&
        validarServicos(body.servicos)
    ) {
        return {
            id,
            horario_inicio: body.horario_inicio,
            cliente_id: body.cliente_id,
            status_pagamento: body.status_pagamento,
            servicos: body.servicos,
            horario_fim: body.horario_inicio + duracao(body.servicos),
            preco: preco(body.servicos)
        }
    }
}

module.exports = model