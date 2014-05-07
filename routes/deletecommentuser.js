var commentsModel = require('../models/comments');

module.exports = function(request,response) {
    var username = request.session.username;
    var url = request.url;
    var index = url.lastIndexOf("/");
    var commentid = url.substring(index+1);
        commentsModel.deleteComment(commentid, function(c) {
            response.redirect('');
        });

};