var users = require('../models/users');

module.exports = function(request,response) {
    var url = request.url;
    var index = url.lastIndexOf("/");
    var userid = url.substring(index+1);
    
    users.addAdmin(userid, function() {
        response.redirect('adminpage');
    });
};