// Dining services route

//module.exports = function(request,response) {
    //
    //var username = request.session.username;
    //
    //if (username) {
  //      response.render('dining')

//};

var pages = require('../models/pages');

module.exports = function(request,response) {
    pages.retrieve(function(names) {
        response.render('dining',{names:names});
    });
};
