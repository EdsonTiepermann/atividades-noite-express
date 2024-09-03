const usuario_controller = require("../controllers/usuario.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.nome != "" &&
        usuario_controller.show(body.usuario_id)
    ) {
        return {
            id,
            nome: body.nome,
            usuario_id: body.usuario_id
        }
    }
}

module.exports = model