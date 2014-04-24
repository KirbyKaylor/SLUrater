//  Unit tests for the users collection

var pages = require('../../models/pages');

// Emptying the database
exports[ 'setup' ] = function(test){
    pages.deleteAll(function(){
        test.done();                        
    });
};


// Successful page creation
exports[ 'create a page' ] = function(test){
    test.expect(1);            // the number of assertions you expect there to be in the test
    pages.createpage('title', 'description', 'pageid','category', function(success) {
        test.ok(success);
        test.done();
    });
};

// Successful page retrieve
exports[ 'retrieve a page' ] = function(test){
    test.expect(1);
    pages.retrievePage('pageid', function(success){
        test.ok(success);
        test.done();
    });
};

// Unsuccessful page retrieve
exports[ 'retrieve a bad_page' ] = function(test){
    test.expect(1);
    pages.retrievePage('badpageid', function(success){
        test.ok(!success);
        test.done();
    });
};
/*
// Successfully retrieve all pages
exports[ 'retrieve all pages' ] = function(test){
    test.expect(1);
    users.retrieve('category', function(success){
        test.ok(success);
        test.done();
    });
};
*/
// Empty the database and close the connection
exports[ 'cleanup' ] = function(test){
    pages.deleteAll(function(){
        pages.close(function(){
            test.done();
        });
    });
};