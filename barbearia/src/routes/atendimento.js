const express = require("express");
const atendimento_controller = require("../controllers/atendimento.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(atendimento_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(atendimento_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = atendimento_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = atendimento_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    atendimento_controller.destroy(req.params.id)
    res.json()
})

module.exports = router