var comments = require('../models/comments');
var validator = require('validator');

module.exports = function(request, response) {
    var comment = validator.escape(request.body.comment);
    var pageid = request.body.pageid;
    var categories = ["diningpage", "housingpage", "buildingspage", "coursespage", "eventspage"];
    var category = categories[request.body.category];
    var username = request.body.username
    var url = request.url;
    
// CHECK TO BE SURE THAT THIS DOESN'T NEED THE MONGO.BLAH CHANGES THAT LISA MADE    
    comments.create(comment, pageid, username, function() {
        response.redirect(category + '/' + pageid);    
    });
};