const express = require("express");
const router = express.Router();
const Bicycle = require("./bicycle");

router.get("/bicycles", (req, res)=>{
    Bicycle.find({}) //ище все записи в БД
        .then(bicycle => {
            res.send(bicycle); //отправляем все получен данные на клиент
        });
});

router.post("/bicycles", (req, res)=>{
    Bicycle.create(req.body)
        .then(bicycle => {
            res.send(bicycle)
        });
});

router.put("/bicycles/:id", (req, res)=>{
    Bicycle.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Bicycle.findOne({_id: req.params.id})
                .then(bicycle => {
                    res.send(bicycle);
                });
        });
});

router.delete("/bicycles/:id", (req, res)=>{
    Bicycle.deleteOne({_id: req.params.id})
        .then(bicycle => {
            res.send(bicycle);
        });
});

module.exports = router;