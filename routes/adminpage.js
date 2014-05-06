var comments = require('../models/comments');
var users = require('../models/users');

module.exports = function(request,response) {
    
    var username = request.session.username;
    users.retrieveUsers(function(usersView) {
        users.findUser(username, function (user) {
            comments.retrieveAllComments(function(comments) {
                response.render('adminpage',{comments:comments, users:usersView, session:user});
            });
        });
    });
    
    


};

    