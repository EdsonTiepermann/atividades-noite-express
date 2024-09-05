const express = require("express");
const livro_controller = require("../controllers/livro.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(livro_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(livro_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    console.log(req.body);
    
    const code = livro_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = livro_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    livro_controller.destroy(req.params.id)
    res.json()
})

module.exports = router