const express = require("express");
const barbearia_controller = require("../controllers/barbearia.js")
const cep_endereco = require("../middlewares/cep_endereco.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(barbearia_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(barbearia_controller.show(req.params.id))
})

router.post("/", cep_endereco, (req, res) => {
    const code = barbearia_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", cep_endereco, (req, res) => {
    const code = barbearia_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    barbearia_controller.destroy(req.params.id)
    res.json()
})

module.exports = router