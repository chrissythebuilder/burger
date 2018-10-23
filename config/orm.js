var connection = require("./connection.js");

// var tableName = "burgers";

var orm = {
    
    selectAll: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result)
        })
    },

    // insertOne: b,
    // updateOne: c,

}

module.exports = orm;