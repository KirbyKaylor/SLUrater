var pages = require('../models/pages');
var comments = require('../models/comments');
var ratings = require('../models/ratings');



module.exports = function(request,response) {
    
    var username = request.session.username;
    var url = request.url;
    var index = url.lastIndexOf("/");
    var pageid = url.substring(index+1);
    
    pages.retrievePage(pageid, function(page) {
        comments.retrieveComments(pageid, function(comments) {
            ratings.retrieveRatings(pageid, function(ratings) {
                response.render('diningpage',{diningPage:page, comments:comments, ratings:ratings, username:username});
                });
        });
    });
    
    


};

    