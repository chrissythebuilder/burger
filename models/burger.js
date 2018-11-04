var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(id, cb) {
        // console.log(id);
        var condition = "id=" + id;
        // console.log(condition);
        orm.updateOne("burgers", {devoured: true}, condition, cb);
        }
    }

module.exports = burger;