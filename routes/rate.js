var ratings = require('../models/ratings');

module.exports = function(request,response) {
    var pageid = request.body.pageid;
    var url = request.url;
    var categories = ["diningpage", "housingpage", "buildingspage", "coursespage", "events"];
    var index = url.lastIndexOf("/");
    category = categories[url.substring(index+1, index+2)];
    var like = url.substring(index+2,index+3);
    var pageid = url.substring(index+3);
    
    ratings.rate(pageid, like, function() {
        response.redirect(category + '/' + pageid);
    });
};