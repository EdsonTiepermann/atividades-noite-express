const express = require("express");
const rede_controller = require("../controllers/rede.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(rede_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(rede_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = rede_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = rede_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    rede_controller.destroy(req.params.id)
    res.json()
})

module.exports = router