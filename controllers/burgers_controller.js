var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req,res) {
    burger.all(function(data) {
        var handlebarObject = {
            burgers: data
        };
        console.log(handlebarObject);
        res.render("index", handlebarObject)
    });
});

router.get("/burgers", function(req,res) {
    burger.all(function(data) {
        var handlebarObject = {
            burgers: data
        };
        console.log(handlebarObject);
        res.render("index", handlebarObject)
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(res) {
        console.log(result);
        res.redirect("/");
    })
});

router.post("/burgers/:id", function(req, res) {
    burgers.update(req.params.id, function(result) {
        res.redirect("/index");
    })
})

module.exports = router;