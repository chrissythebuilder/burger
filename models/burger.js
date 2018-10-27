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
        var condition = "id" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
        }
    }

module.exports = burger;