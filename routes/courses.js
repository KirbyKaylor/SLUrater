// Courses route
var pages = require('../models/pages');

module.exports = function(request,response) {
    pages.retrievePages("courses", function(page) {
        response.render('courses',{course:page});
    });
};