var users = require('../models/users');
var comments = require('../models/comments');

module.exports = function(request,response) {
    var url = request.url;
    var index = url.lastIndexOf("/");
    var userid = url.substring(index+1);
    var username = request.body.username
    
    users.deleteUserName(userid, function() {
        comments.deleteAllName(request.session.username, function() {
            delete request.session.username;
            response.redirect('/');
        });   
    });
};
