const express = require("express");
const fornecedor_controller = require("../controllers/fornecedor.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(fornecedor_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(fornecedor_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = fornecedor_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = fornecedor_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    fornecedor_controller.destroy(req.params.id)
    res.json()
})

module.exports = router