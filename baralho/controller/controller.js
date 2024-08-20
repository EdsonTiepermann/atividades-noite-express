// controllers.js

let naipes = [];
let cartas = [];
let naipeId = 1;
let cartaId = 1;

// Funções para Naipe
const createNaipe = (req, res) => {
  const { nome, cor } = req.body;
  const naipe = { id: naipeId++, nome, cor };
  naipes.push(naipe);
  res.status(201).json(naipe);
};

const getNaipes = (req, res) => {
  res.json(naipes);
};

const getNaipeById = (req, res) => {
  const { id } = req.params;
  const naipe = naipes.find(n => n.id === parseInt(id));
  if (naipe) {
    res.json(naipe);
  } else {
    res.status(404).json({ error: 'Naipe não encontrado' });
  }
};

const updateNaipe = (req, res) => {
  const { id } = req.params;
  const { nome, cor } = req.body;
  const naipe = naipes.find(n => n.id === parseInt(id));
  if (naipe) {
    naipe.nome = nome;
    naipe.cor = cor;
    res.json(naipe);
  } else {
    res.status(404).json({ error: 'Naipe não encontrado' });
  }
};

const deleteNaipe = (req, res) => {
  const { id } = req.params;
  const index = naipes.findIndex(n => n.id === parseInt(id));
  if (index !== -1) {
    naipes.splice(index, 1);
    // Remove todas as cartas associadas a este naipe
    cartas = cartas.filter(carta => carta.naipe_id !== parseInt(id));
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Naipe não encontrado' });
  }
};

// Funções para Carta
const createCarta = (req, res) => {
  const { nome, naipe_id } = req.body;
  const naipe = naipes.find(n => n.id === naipe_id);
  if (!naipe) {
    return res.status(400).json({ error: 'Naipe não encontrado' });
  }
  const carta = { id: cartaId++, nome, naipe_id };
  cartas.push(carta);
  res.status(201).json(carta);
};

const getCartas = (req, res) => {
  res.json(cartas);
};

const getCartaById = (req, res) => {
  const { id } = req.params;
  const carta = cartas.find(c => c.id === parseInt(id));
  if (carta) {
    res.json(carta);
  } else {
    res.status(404).json({ error: 'Carta não encontrada' });
  }
};

const updateCarta = (req, res) => {
  const { id } = req.params;
  const { nome, naipe_id } = req.body;
  const naipe = naipes.find(n => n.id === naipe_id);
  if (!naipe) {
    return res.status(400).json({ error: 'Naipe não encontrado' });
  }
  const carta = cartas.find(c => c.id === parseInt(id));
  if (carta) {
    carta.nome = nome;
    carta.naipe_id = naipe_id;
    res.json(carta);
  } else {
    res.status(404).json({ error: 'Carta não encontrada' });
  }
};

const deleteCarta = (req, res) => {
  const { id } = req.params;
  const index = cartas.findIndex(c => c.id === parseInt(id));
  if (index !== -1) {
    cartas.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Carta não encontrada' });
  }
};

module.exports = {
  createNaipe,
  getNaipes,
  getNaipeById,
  updateNaipe,
  deleteNaipe,
  createCarta,
  getCartas,
  getCartaById,
  updateCarta,
  deleteCarta
};
