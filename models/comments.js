// A model for a visitor collection
var mongojs = require('mongojs');

// Access the database
var db = mongojs('SLUrater', ['comments']);

// create a new comment
module.exports.create = function(comment, pageid, username, callback) {
    db.comments.insert({text:comment, postid:mongojs.ObjectId(pageid), username:username}, function(error) {
        if (error) throw error
        callback();
    });
};


module.exports.retrieveComments = function(pageid, callback) {
    
    db.comments.find({postid:mongojs.ObjectId(pageid)}, function(error,comments) {
        if (error) throw error;
        
        callback(comments);
    });
};

// still need to be able to view the lot of them
