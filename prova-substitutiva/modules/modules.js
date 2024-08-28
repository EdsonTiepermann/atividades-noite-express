const prompt = require("prompt-sync")({ sign: true });

let funcionarios = [
  {
    id: 1,
    nome: "Maria da Silva",
    cpf: "01415696555",
    telefone: 999009999,
    idade: 20,
  },
  {
    id: 2,
    nome: "João Alfredo",
    cpf: "02154696551",
    idade: 72,
  },
];

let countId = 3;

function getIndice(id) {
  const indice = funcionarios.findIndex((el) => el.id == id);

  if (indice === -1) {
    console.log("ID inexistente");
  }
  return indice;
}

const modeloFunc = (id) => {
  let nome = prompt("Nome do funcionário: ");
  let cpf = prompt("CPF do funcionário: ");
  let telefone = parseInt(prompt("Telefone do funcionário: "));
  let idade = parseInt(prompt("Idade do funcionário: "));

  if (nome !== "" && cpf !== "" && !isNaN(telefone) && !isNaN(idade)) {
    return {
      id: id !== undefined ? id : countId++,
      nome,
      cpf,
      telefone,
      idade,
    };
  } else {
    console.log("Dados inválidos!");
    return undefined;
  }
};

const adicionarFuncionarios = () => {
  let novoFunc = modeloFunc();

  if (novoFunc !== undefined) {
    funcionarios.push(novoFunc);
    console.log("Funcionário adicionado:");
    console.log(novoFunc);
  }
};

function listarFuncionarios() {
  funcionarios.forEach((funcionario) => {
    console.log(`
        ID: ${funcionario.id}, Nome: ${funcionario.nome}, CPF: ${
      funcionario.cpf
    }, Telefone: ${funcionario.telefone || "N/A"}, Idade: ${funcionario.idade}
      `);
  });
}

const atualizarFuncionarios = () => {
  listarFuncionarios();

  const id = parseInt(prompt("Qual ID deseja editar: "));
  const indice = getIndice(id);

  if (indice !== -1) {
    let funcionarioEditado = modeloFunc(id);

    if (funcionarioEditado !== undefined) {
      funcionarios[indice] = funcionarioEditado;
      console.log("Funcionário atualizado!");
    }
  }
};

const deletarFuncionario = () => {
  listarFuncionarios();

  const id = parseInt(prompt("Qual ID deseja remover: "));
  const indice = getIndice(id);

  if (indice !== -1) {
    funcionarios.splice(indice, 1);
    console.log("Funcionário removido!");
  }
};

let produtos = [
  {
    id: 1,
    nome: "Farinha de trigo",
    categoria: "farelo",
  },
  {
    id: 2,
    nome: "Feijão",
    categoria: "grãos",
  },
];

let countProdId = 3;

function getIndiceProd(id) {
  const indice = produtos.findIndex((el) => el.id == id);

  if (indice === -1) {
    console.log("ID inexistente");
  }
  return indice;
}

const modeloProd = (id) => {
  let nome = prompt("Nome do produto: ");
  let categoria = prompt("Categoria do produto: ");

  if (nome !== "" && categoria !== "") {
    return {
      id: id !== undefined ? id : countProdId++,
      nome: nome,
      categoria,
    };
  } else {
    console.log("Dados inválidos!");
    return undefined;
  }
};

const adicionarProdutos = () => {
  let novoProd = modeloProd();

  if (novoProd !== undefined) {
    produtos.push(novoProd);
    console.log("Produto adicionado:");
    console.log(novoProd);
  }
};

function listarProdutos() {
  produtos.forEach((produto) => {
    console.log(
      `ID: ${produto.id}, Nome: ${produto.nome}, Categoria: ${produto.categoria}`
    );
  });
}

const atualizarProdutos = () => {
  listarProdutos();

  const id = parseInt(prompt("Qual ID deseja editar: "));
  const indice = getIndiceProd(id);

  if (indice !== -1) {
    let produtoEditado = modeloProd(id);

    if (produtoEditado !== undefined) {
      produtos[indice] = produtoEditado;
      console.log("Produto atualizado!");
    }
  }
};

const deletarProduto = () => {
  listarProdutos();

  const id = parseInt(prompt("Qual ID deseja remover: "));
  const indice = getIndiceProd(id);

  if (indice !== -1) {
    produtos.splice(indice, 1);
    console.log("Produto removido!");
  }
};

module.exports = {
  adicionarFuncionarios,
  listarFuncionarios,
  atualizarFuncionarios,
  deletarFuncionario,
  adicionarProdutos,
  listarProdutos,
  atualizarProdutos,
  deletarProduto,
};
