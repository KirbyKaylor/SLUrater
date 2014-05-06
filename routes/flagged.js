var comments = require('../models/comments');



module.exports = function(request,response) {
    
    var username = request.session.username;
        comments.retrieveAllComments(function(comments) {
                response.render('flagged',{comments:comments, session:username});

        });
    
    


};

    