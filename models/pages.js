// A model for a visitor collection
var mongojs = require('mongojs');

// Access the database
var db = mongojs('SLUrater', ['pages']);

// Register a new user
module.exports.createpage = function(title, description, id, category, callback) {
    

                
     db.pages.insert({
        title: title,
        description: description,
        category: category,
        _id: id}
                );
    
    callback(true);
};

// Function to return pages based on category
module.exports.retrievePages = function(category, callback) {
    
    db.pages.find({category: category}, function(error,names) {
        if (error) throw error;
        
        callback(names);
    });
};

// Function to return a page based on the page id
// changed to match from email
module.exports.retrievePage = function(pageid, callback) {
    
    db.pages.findOne({_id:mongojs.ObjectId(pageid)}, function(error,page) {
        if (error) throw error;
        
        callback(page);
    });
};

// Delete all users
module.exports.deleteAll = function(callback){
    db.pages.remove({}, function(error) {
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

