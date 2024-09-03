const express = require("express");
const usuario_controller = require("../controllers/usuario.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(usuario_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(usuario_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = usuario_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = usuario_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    usuario_controller.destroy(req.params.id)
    res.json()
})

module.exports = router