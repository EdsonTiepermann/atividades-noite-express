const express = require("express");
const barbeiro_controller = require("../controllers/barbeiro.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(barbeiro_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(barbeiro_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = barbeiro_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = barbeiro_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    barbeiro_controller.destroy(req.params.id)
    res.json()
})

module.exports = router