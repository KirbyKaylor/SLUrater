// Academic buildings route
var pages = require('../models/pages');

module.exports = function(request,response) {
    pages.retrievePages("buildings", function(page) {
        response.render('buildings', {buildings:page});
    });
};