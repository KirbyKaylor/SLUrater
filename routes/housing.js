var pages = require('../models/pages');

module.exports = function(request,response) {
    var username = request.session.username;
    pages.retrievePages("housing", function(page) {
        response.render('housing',{house:page, username:username});
    });
};