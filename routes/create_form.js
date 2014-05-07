// Route to the form for creating a page

module.exports = function(request,response) {
var username = request.session.username;
// need to get the item id number
        response.render('create_form', {username:username})

};