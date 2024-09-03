const express = require("express");
const cliente_controller = require("../controllers/cliente.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(cliente_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(cliente_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = cliente_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = cliente_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
})

module.exports = router