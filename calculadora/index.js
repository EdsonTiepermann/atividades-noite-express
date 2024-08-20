const express = require('express');
const app = express();
const porta = 4000;
const op = require('./controllers/operacoes');

app.use(express.json())

// app.get('/calculadora/:n1/:n2', (req, res) => {
//     const n1 = parseFloat(req.params.n1);
//     const n2 = parseFloat(req.params.n2);
//     const soma = n1 + n2;
    
//     // res.send(req.params);
//     res.send(`A soma é: ${soma}`); 
//     // res.json(req.params)
// });

app.get('/calculadora/somar', (req, res) => {

    const result = op.soma(req.body)

    res.send(`A soma é: ${result}`);
})

// app.get('/calculadora/subtrair', (req, res) => {

//     const result = op.subtracao(req.body)

//     res.send(`A subtracao é: ${result}`);
// })

app.listen(porta, () => {
    console.log(`O servidor iniciou na porta ${porta}`);
})