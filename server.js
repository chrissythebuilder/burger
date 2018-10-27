// calling packages required for this application
var express = require("express");
var bodyParser = require("body-parser");

// port to be used when loading up the page in localhost
var PORT = process.env.PORT || 3000;

// executing express
var app = express();

// body-parser package
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname+"/public:assets"));

// using express-handlebars package for launching html pages
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");
app.use(router);

// listen to port
app.listen(PORT, function() {
    console.log("Server listening to http://localhost:" + PORT);
})