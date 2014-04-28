// A model for a visitor collection
var mongojs = require('mongojs');

// Access the database
var db = mongojs('SLUrater', ['ratings']);

var rate;

// Input a rating
module.exports.rate = function(pageid, like, callback) {
    if (like == 1 ) {
        db.ratings.findAndModify({
            query: {postid:pageid},
            update: {$inc: {like: 1}},
            upsert:true
        })
    };
    if (like == 2) {
        db.ratings.findAndModify({
            query: {postid:pageid},
            update: {$inc: {dislike: 1}},
            upsert:true
        })
    }
    callback(true);
};


module.exports.retrieveRatings = function(pageid, callback) {
    
    db.ratings.findOne({postid:pageid}, function(error, ratings) {
        if (error) throw error;
        
        // If the page has not been rated yet, a ratings element needs to be created
        // Create a new document with a postid, like, dislike
        if (!ratings) {
            ratings = {postid:pageid, like:0, dislike:0};
        }
        
        db.ratings.save(ratings, function(error) {
            if (error) throw error;
            
            callback(ratings)
        });
    });

};

// still need to be able to view the lot of them
