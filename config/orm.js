var connection = require("./connection.js");

// var tableName = "burgers";

var orm = {
    
    selectAll: function(tableInfo, cb) {
        var queryString = "SELECT * FROM " + tableInfo + ";";
        
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        })
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        // console.log(queryString);

        connection.query(queryString, vals, function(err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        })
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        // console.log(queryString);

        connection.query(queryString, vals, function(err, res) {
            if (err) {
                throw err;
            }

            cb(res)
        })
    }

}

module.exports = orm;