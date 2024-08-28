const express = require("express");
const naipe_controller = require("./controller/naipe.js");
const carta_controller = require("./controller/carta.js");
const app = express();
const port = 3000;

app.use(express.json());

// GERENCIAMENTO DE NAIPES
app.post("/naipe", (req, res) => {
  const naipe = req.body;
  const code = naipe_controller.store(naipe);
  res.status(code).json();
});

app.get("/naipe", (req, res) => {
  const naipes = naipe_controller.index();
  res.json(naipes);
});

app.get("/naipe/:id", (req, res) => {
  const naipe = naipe_controller.show(req.params.id);
  res.json(naipe);
});

app.put("/naipe/:id", (req, res) => {
    const naipe = req.body
    const code = naipe_controller.update(req.params.id, naipe)
    res.status(code).json()
})

app.delete("/naipe/:id", (req, res) => {
    naipe_controller.destroy(req.params.id)
    res.json()
})
// GERENCIAMENTO DE NAIPES

// GERENCIAMENTO DE CARTAS
app.post("/carta", (req, res) => {
  const carta = req.body;
  const code = carta_controller.store(carta);
  res.status(code).json();
});

app.get("/carta", (req, res) => {
  const cartas = carta_controller.index();
  res.json(cartas);
});

app.get("/carta/:id", (req, res) => {
  const carta = carta_controller.show(req.params.id);
  res.json(carta);
});

app.put("/carta/:id", (req, res) => {
    const carta = req.body
    const code = carta_controller.update(req.params.id, carta)
    res.status(code).json()
})

app.delete("/carta/:id", (req, res) => {
    naipe_controller.destroy(req.params.id)
    res.json()
})
// GERENCIAMENTO DE CARTAS

app.listen(port, () => {
    console.log("Gerenciador de baralho executanto na porta " + port)
})