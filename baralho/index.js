const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);
const PORT = 3000;

// routes.js
const express = require('express');
const router = express.Router();
const {
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
} = require('./controllers');

// Rotas para Naipe
router.post('/naipe', createNaipe);
router.get('/naipe', getNaipes);
router.get('/naipe/:id', getNaipeById);
router.put('/naipe/:id', updateNaipe);
router.delete('/naipe/:id', deleteNaipe);

// Rotas para Carta
router.post('/carta', createCarta);
router.get('/carta', getCartas);
router.get('/carta/:id', getCartaById);
router.put('/carta/:id', updateCarta);
router.delete('/carta/:id', deleteCarta);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
