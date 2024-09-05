const express = require("express");
const aluguel_router = require("./routes/aluguel.js");
const estudante_router = require("./routes/estudante.js");
const livro_router = require("./routes/livro.js");
// const name_upper_case = require("./middlewares/name_upper_case.js")

const app = express();
const port = 5000;

app.use(express.json());

// app.use(name_upper_case)
// app.use(cep_endereco) // Middleware de uso global

app.use("/estudante", estudante_router);
app.use("/livro", livro_router);
app.use("/aluguel", aluguel_router);

app.listen(port, () => {
  console.log(`Server running in ${port} port`);
});