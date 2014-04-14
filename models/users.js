// A model for a visitor collection
var mongojs = require('mongojs');
var bcrypt = require('bcrypt');

// Access the database
var db = mongojs('loginapp', ['users']);

// Verify login credentials
module.exports.retrieve = function(name, password, callback) {
    
    db.users.findOne({name:name}, function(error, user) {
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
module.exports.deleteAll = function(callback) {
    db.users.remove({}, function(error) {
        if (error) throw error;
        callback();
    });
};

// Close the connection
module.exports.close = function(callback) {
    db.close(function(error) {
        if (error) throw error;
        callback();
    });
};










