var pages = require('../models/pages');

module.exports = function(request,response) {
    pages.retrievePages("dining", function(page) {
        response.render('dining',{diningPage:page});
    });
};