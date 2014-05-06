// A model for a visitor collection
var mongojs = require('mongojs');

// Access the database
var db = mongojs('SLUrater', ['comments']);

// create a new comment
module.exports.create = function(comment, pageid, username, callback) {
    db.comments.insert({text:comment, postid:mongojs.ObjectId(pageid), username:username, flag: false}, function(error) {
        if (error) throw error
        callback();
    });
};

// Retrieve comments based on Pageid
module.exports.retrieveComments = function(pageid, callback) {
    
    db.comments.find({postid:mongojs.ObjectId(pageid)}, function(error,comments) {
        if (error) throw error;
        
        callback(comments);
    });
};

// Retrieve all comments
module.exports.retrieveAllComments = function(callback) {
    
    db.comments.find({}, function(error,comments) {
        if (error) throw error;
        
        callback(comments);
    });
};

// Delete a comment on commentID
module.exports.deleteComment = function(commentID, callback) {
    
    db.comments.remove({_id:mongojs.ObjectId(commentID)}, function(error) {
        if (error) throw error;
        
        callback(true);
    });
};

// still need to be able to view the lot of them



// Delete all Comments
module.exports.deleteAll = function(callback){
    db.comments.remove({}, function(error) {
        if (error) throw error;
        callback();
    });
};

// Flag a comment
module.exports.flag = function(commentid, callback) {
    db.comments.update(
            {_id:mongojs.ObjectId(commentid)},
            {$set: {flag:true}});
    db.comments.findOne({_id:mongojs.ObjectId(commentid)}, function(error,comment) {
        if (error) throw error;
        
        callback(comment)
    });
    // callback(db.comments.find({_id:mongojs.ObjectId(commentid)}));
}

// Close the connection
module.exports.close = function(callback){
    db.close(function(error) {
        if (error) throw error;
        callback();
    });
};
