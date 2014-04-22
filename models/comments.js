// A model for a visitor collection
var mongojs = require('mongojs');

// Access the database
var db = mongojs('SLUrater', ['comments']);

// Adding a comment
module.exports.add = function(name, category, content, date, callback){
    
};