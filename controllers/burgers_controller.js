var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", {burgers: data})
    });
});

router.get("/burgers", function(req,res) {
    burger.selectAll(function(data) {
        res.render("index", {burgers: data})
    });
});

router.post("/burgers/create", function(req, res) {
    burger.insertOne(["burger_name","devoured"], [req.body.name,false], function() {
        res.redirect("/burgers");
    });
});

router.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect(303, "/burgers");
    })
});

module.exports = router;