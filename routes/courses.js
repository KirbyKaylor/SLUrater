// Courses route
var pages = require('../models/pages');

module.exports = function(request,response) {
    var username = request.session.username;
    pages.retrievePages("courses", function(page) {
        response.render('courses',{course:page, username:username});
    });
};