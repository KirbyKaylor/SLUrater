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

// Verify login credentials
module.exports.retrieve = function(category, callback) {
    
    db.pages.find({name:name}, function(error, user) {
                     if (error) throw error;
                     
                     if (!user) {
                     callback(false);
                     }
                     
                     else {
                     bcrypt.compare(password, user.password, function(error, success) {
                                    if (error) throw error;
                                    
                                    callback(success);
                                    })
                     }
                     });
};

// Delete all users
module.exports.deleteAll = function(callback){
    db.users.remove({}, function(error) {
                    if (error) throw error;
                    callback();
                    });
};

// Close the connection
module.exports.close = function(callback){
    db.close(function(error) {
             if (error) throw error;
             callback();
             });
}













