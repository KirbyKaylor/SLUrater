// Registration page: try to register
var users = require('../models/pages');

module.exports = function(request,response) {
    
    var name = request.body.name;
    var description = request.body.description;
    var id = request.body.id;
    var category = request.body.category;
    
    users.createpage(name, description, id, category, function(success) {
                 
                 if (success) {
                     //response.render('asdflkj');
                 }
                 
                 else {
                 request.session.error = 'Error Creating the page';
                 }
                 
                 response.redirect('/');
                 });
};