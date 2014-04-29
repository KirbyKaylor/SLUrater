//  Unit tests for the users collection

var comments = require('../../models/comments');

// Emptying the database
exports[ 'setup' ] = function(test){
    comments.deleteAll(function(){
        test.done();                        
    });
};

// Successful comment creation
exports[ 'create a comment' ] = function(test){
    test.expect(1);            // the number of assertions you expect there to be in the test
    comments.create('comment', 'username', 'pageid', function(success) {
        test.ok(success);
        test.done();
    });
};


// Unsuccessful comment creation
exports[ 'unsuccessful comment creation' ] = function(test){
    test.expect(1);
    comments.create('comment', 'bad_username','badpageid', function(success){
        test.ok(!success);
        test.done();
    });
};

// Empty the database and close the connection
exports[ 'cleanup' ] = function(test){
    comments.deleteAll(function(){
        comments.close(function(){
            test.done();
        });
    });
};