var users = require('../models/users');

module.exports = function(request,response) {
    
    var username = request.session.username;
    users.retrieveUsers(function(usersView) {
        users.findUser(username, function (user) {
            response.render('users',{users:usersView, session:user})
        });
    });
};