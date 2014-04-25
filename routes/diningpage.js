var pages = require('../models/pages');
var comments = require('../models/comments');



module.exports = function(request,response) {
    
    var url = request.url;
    var index = url.lastIndexOf("/");
    var pageid = url.substring(index+1);
    
    pages.retrievePage(pageid, function(page) {
        comments.retrieveComments(pageid, function(comments) {
        response.render('diningpage',{diningPage:page, comments:comments});
        });
    });
    
    


};

    