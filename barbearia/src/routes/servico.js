const express = require("express")
const router = express.Router()
const servico_controller = require("../controllers/servico.js")

router.get("/", (req, res) => {
    res.json(servico_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(servico_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = servico_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = servico_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    servico_controller.destroy(req.params.id)
    res.json()
})

module.exports = router