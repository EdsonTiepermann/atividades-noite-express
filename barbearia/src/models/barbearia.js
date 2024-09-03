const rede_controller = require("../controllers/rede.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.fotos != undefined &&
        body.nome != "" &&
        Array.isArray(body.fotos) &&
        body.fotos.every(el => el != "") &&
        rede_controller.show(body.rede_id)
    ) {
        return {
            id,
            nome: body.nome,
            fotos: body.fotos,
            endereco: body.endereco,
            rede_id: body.rede_id
        }
    }
}

module.exports = model