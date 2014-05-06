var pages = require('../models/pages');

module.exports = function(request,response) {
    pages.retrievePages("housing", function(page) {
        response.render('housing',{house:page});
    });
};