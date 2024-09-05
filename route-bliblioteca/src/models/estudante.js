let proxId = 1;

const model = (body, id = proxId++) => {

    console.log(body);
    
    if(
        body.nome != undefined &&
        body.nome != "" &&
        !isNaN(body.matricula) &&
        body.curso != "" &&
        !isNaN(body.ano)
    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano,
        }
    }
}

module.exports = model