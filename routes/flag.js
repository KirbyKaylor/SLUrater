var comments = require('../models/comments');

module.exports = function(request,response) {
    var url = request.url;
    var categories = ["diningpage", "housingpage", "buildingspage", "coursespage", "eventspage"];
    var index = url.lastIndexOf("/");
    category = categories[url.substring(index+1, index+2)];
    var commentid = url.substring(index+2);
    
    comments.flag(commentid, function(comment) {
        response.redirect(category + '/' + comment.postid);
    });
};