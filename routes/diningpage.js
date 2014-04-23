var pages = require('../models/pages');




module.exports = function(request,response) {
    
    var id = request.body.id;
    
    pages.retrievePage(id, function(page) {
        response.render('diningpage',{diningPage:page});
    });
};