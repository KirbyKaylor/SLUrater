var pages = require('../models/pages');

module.exports = function(request,response) {
    var username = request.session.username;
    pages.retrievePages("dining", function(page) {
        response.render('dining',{diningPage:page, username:username});
    });
};