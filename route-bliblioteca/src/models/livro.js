let nextId = 1;

const model = (body, id = nextId++) => {
  console.log(body);
  
  if (body.titulo != undefined && body.titulo != "" && body.autor != undefined && body.autor != "" && !isNaN(body.ano)  && body.genero != undefined && body.genero != "") {
    return {
      id,
      titulo: body.titulo,
      autor: body.autor,
      ano: body.ano,
      genero: body.genero,
    };
  }
};

module.exports = model;
