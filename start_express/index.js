const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/segunda-rota', (req, res) => {
  res.send('segunda rota');
})

app.get('/prime-day/:produto', (req, res) => {
req.params;
res.send(`O produto comprado foi: ${req.params.produto}`);
})

app.listen(porta, () => {
  console.log(`O servidor iniciou na porta ${porta}`);
  
})

























// const express = require('express');
// const app = express();
// const porta = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/teste/:nome', (req, res) => {
//     // res.send(req.params)
//     res.send(`Aqui é um teste de requisição, entendido senhor: ${req.params.nome} !`);
// });

// app.listen(3000, () => {
//     console.log(`O servidor está ativo na porta ${porta}!`);
// });