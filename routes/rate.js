var ratings = require('../models/ratings');

module.exports = function(request,response) {
    var pageid = request.body.pageid;
    var url = request.url;
    var index = url.lastIndexOf("/");
    var like = url.substring(index+1,index+2);
    var pageid = url.substring(index+2);
    
    ratings.rate(pageid, like, function() {
        response.redirect('diningpage/'+pageid);
    });
};