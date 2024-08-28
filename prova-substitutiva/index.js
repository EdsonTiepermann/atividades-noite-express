const prompt = require("prompt-sync")({ sign: true });

const {
  adicionarFuncionarios,
  listarFuncionarios,
  atualizarFuncionarios,
  deletarFuncionario,
  adicionarProdutos,
  listarProdutos,
  atualizarProdutos,
  deletarProduto,
} = require("./modules/modules.js");

while (true) {
  console.log(`
    1 - Cadastrar funcionário
    2 - Listar funcionários
    3 - Atualizar funcionário
    4 - Remover funcionário
    5 - Cadastrar produto
    6 - Listar produto
    7 - Atualizar produto
    8 - Remover produto
    9 - Sair
    `);
  const opcao = prompt();

  switch (opcao) {
    case "1":
      adicionarFuncionarios();
      break;
    case "2":
      listarFuncionarios();
      break;
    case "3":
      atualizarFuncionarios();
      break;
    case "4":
      deletarFuncionario();
      break;
    case "5":
      adicionarProdutos();
      break;
    case "6":
      listarProdutos();
      break;
    case "7":
      atualizarProdutos();
      break;
    case "8":
      deletarProduto();
      break;
    case "9":
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}