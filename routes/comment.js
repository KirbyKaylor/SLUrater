var comments = require('../models/comments');
var validator = require('validator');

module.exports = function(request, response) {
    var comment = validator.escape(request.body.comment);
    var pageid = request.body.pageid;
    
// CHECK TO BE SURE THAT THIS DOESN'T NEED THE MONGO.BLAH CHANGES THAT LISA MADE    
    comments.create(comment, pageid, function() {
        response.redirect('diningpage/'+pageid);    
    });
};