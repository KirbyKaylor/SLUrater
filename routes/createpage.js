// Registration page: try to register
var users = require('../models/pages');
var validator = require('validator');

module.exports = function(request,response) {
    
    var name = request.body.name;
    var description = request.body.description;
    var id = request.body.id;
    
    users.createpage(name, description, id, function(success) {
                 
                 if (success) {
                     //response.render('asdflkj');
                 }
                 
                 else {
                 request.session.error = 'Error Creating the page';
                 }
                 
                 response.redirect('/');
                 });
};