// Profile page: profile or redirect

module.exports = function(request,response) {
    // gets the current user, the comment message body
    var user = request.session.username;
    var name = request.body.content;
    var route = request.body.route;
        
    
    if (username) {
        //response.render('profile', {username:username});
        
        // Adds the comment to the database
        //comments.add(user,name,)
    }
    
    else {
        response.redirect('/');
    }
};