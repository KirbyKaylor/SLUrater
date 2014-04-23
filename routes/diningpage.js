var pages = require('../models/pages');




module.exports = function(request,response) {
    
    var url = request.url;
    var index = url.lastIndexOf("/");
    var pageid = url.substring(index+1);
    
    pages.retrievePage(pageid, function(page) {
        response.render('diningpage',{diningPage:page});
    });
};

