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


module.exports = router;