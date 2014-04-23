// Registration page: try to register
var users = require('../models/pages');

module.exports = function(request,response) {
    
    var title = request.body.title;
    var description = request.body.description;
    var id = request.body.id;
    var category = request.body.category;
    
    users.createpage(title, description, id, category, function(success) {
                 
                 if (success) {
                     //response.render('asdflkj');
                 }
                 
                 else {
                 request.session.error = 'Error Creating the page';
                 }
                 
                 response.redirect('/');
                 });
};