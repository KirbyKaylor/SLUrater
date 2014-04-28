var users = require('../models/users');

module.exports = function(request,response) {
    users.retrieveUsers(function(users) {
        response.render('users',{users:users});
    });
};