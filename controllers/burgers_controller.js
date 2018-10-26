var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        res.render("index", {burger_info: data})
    });
});

router.get("/burgers", function(req,res) {
    burgers.selectAll(function(data) {
        res.render("index", {burger_info: data})
    });
});

router.post("/burgers/create", function(req, res) {
    burgers.insertOne(["burger_name","devoured"], [req.body.name,false], function(info) {
        console.log(info);
        res.redirect("/burgers");
    });
});

router.post("/burger/devour/:id", function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect("/burgers")
    });
});

module.exports = router;