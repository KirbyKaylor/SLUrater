//  Unit tests for the users collection

var ratings = require('../../models/ratings');

// Emptying the database
exports[ 'setup' ] = function(test){
    ratings.deleteAll(function(){
        test.done();                        
    });
};


// Successful page rating
exports[ 'rate a page' ] = function(test){
    test.expect(1);            // the number of assertions you expect there to be in the test
    ratings.rate('pageid', '1', function(success) {
        test.ok(success);
        test.done();
    });
};


// Empty the database and close the connection
exports[ 'cleanup' ] = function(test){
    ratings.deleteAll(function(){
        ratings.close(function(){
            test.done();
        });
    });
};