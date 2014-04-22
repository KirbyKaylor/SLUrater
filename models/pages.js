// A model for a visitor collection
var mongojs = require('mongojs');
var bcrypt = require('bcrypt');

// Access the database
var db = mongojs('SLUrater', ['pages']);

// Register a new user
module.exports.createpage = function(name, description, id, category, callback) {
    

                
                db.pages.insert({
                                name: name,
                                description: description,
                                category: category,
                                _id: id
                                       
                                       }
                );
    
    callback(true);
};

// Function to get a list of visitors
module.exports.retrieve = function(callback) {
    
    db.pages.find({}, function(error,names) {
        if (error) throw error;
        
        callback(names);
    });
};













