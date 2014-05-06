// Campus events route
var pages = require('../models/pages');

module.exports = function(request,response) {
    var username = request.session.username;
    pages.retrievePages("events", function(page) {
        response.render('events',{event:page, username:username});
    });
};