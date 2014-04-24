// A model for a visitor collection
var mongojs = require('mongojs');

// Access the database
var db = mongojs('SLUrater', ['comments']);

// create a new comment
module.exports.create = function(comment, pageid, callback) {
    db.comments.insert({text:comment, postid:mongojs.ObjectId(pageid)}, function(error) {
        if (error) throw error
        callback();
    });
};


// still need to be able to view the lot of them
