// Academic buildings route
var pages = require('../models/pages');

module.exports = function(request,response) {
    var username = request.session.username;
    pages.retrievePages("buildings", function(page) {
        response.render('buildings', {buildings:page, username:username});
    });
};