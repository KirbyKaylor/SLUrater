// Campus events route
var pages = require('../models/pages');

module.exports = function(request,response) {
    pages.retrievePages("events", function(page) {
        response.render('events',{event:page});
    });
};