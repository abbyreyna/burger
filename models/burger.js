// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burger_db", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers_db", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers_db", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burgers_db", condition, function(res) {
        cb(res);
      });
    }  
};

module.exports = burger;