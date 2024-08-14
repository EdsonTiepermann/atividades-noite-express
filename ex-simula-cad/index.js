const express = require("express");
const app = express();
const porta = 3000;

app.get("/", (req, res) => {
  res.send("Bem vindo ao primeiro sistema!");
});

app.get("/cadastro/:nome/:idade/:curso", (req, res) => {
  res.send(`Ola ${req.params.nome}, sua idade e ${req.params.idade} e voce esta cadastrado no curso de ${req.params.curso}`);
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
