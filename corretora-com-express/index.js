const express = require('express')
const corretora = require('./controller/corretora')
const app = express()
const port = 6000

app.use(express.json())

app.get("/corretora", (req, res) => {
    res.json(corretora.showAll())
})

app.post("/corretora", (req, res) => {

    const code = corretora.store(req.body)

    res.status(code).json()  

    // const result = corretora.store(req.body);
    // res.status(result.status).json({ message: result.message });
})

app.get("/corretora/:id", (req, res) => {
    res.json(corretora.findId(req.params.id))
})

app.put("/corretora/:id", (req, res) => {
    const code = corretora.update(req.body, req.params.id);
    res.status(code).json()
})

app.delete("/corretora/:id", (req, res) => {
    const code = corretora.destroy(req.params.id)
    res.status(code).json()
})

app.listen(port, () => {
    console.log(`Conexão estabelecida na porta ${port}`);
})
























/* Como pegar os dados que vem do cliente */
// app.get("/:usuario/:repositorio", (req, res) => {
    
//     console.log("antes do ?:", req.params.usuario, req.params.repositorio)
//     console.log("depois do ?:", req.query.id, req.query.idade)
//     console.log("corpo da requisição: ", req.body.cidade, req.body.bairro)

//     res.send("Tá frio demais")
// })
/* Como pegar os dados que vem do cliente */