const express = require("express");
const estudante_controller = require("../controllers/estudante.js")
const name_upper_case = require('../middlewares/name_upper_case.js')
const router = express.Router();

router.get("/", (req, res) => {
    res.json(estudante_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(estudante_controller.show(req.params.id))
})

router.post("/", name_upper_case, (req, res) => {
    console.log(req);
    const code = estudante_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = estudante_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    estudante_controller.destroy(req.params.id)
    res.json()
})

module.exports = router