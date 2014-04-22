// Registration page: try to register
var pages = require('../models/pages');
var validator = require('validator');

module.exports = function(request,response) {
   
    var name = validator.escape(request.body.title);
    var category = validator.escape(request.body.categories);
    var content = validator.escape(request.body.info);
    var user = request.session.username;
    
    if (user) {
        
        pages.create(name, category, content, function(success) {
            
            if (success) {
                // redirects to the home page of the category
                // that the post is in
                response.redirect("/"+category);
            }
            // if unsuccessful, redirect to create page form and display error message
            else {
                request.session.error = 'Error, was unable to create page. Please try again.';
                response.redirect("/create_form")
            }
            
            response.redirect('/');
        });
    }
};