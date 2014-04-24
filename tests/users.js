//  Unit tests for the users collection

var users = require('../../models/users');

// Emptying the database
exports[ 'setup' ] = function(test){
    users.deleteAll(function(){
        test.done();                        
    });
};


// Successful registration
exports[ 'register a user' ] = function(test){
    test.expect(1);            // the number of assertions you expect there to be in the test
    users.create('username', 'password', function(success) {
        test.ok(success);
        test.done();
    });
};

// Failed registration
exports[ 'register a duplicate user' ] = function(test){
    test.expect(1);
    users.create('username','password', function(success){
        test.ok(!success);
        test.done();
    });
};

// Successful login
exports[ 'login a user' ] = function(test){
    test.expect(1);
    users.retrieve('username','password', function(success){
        test.ok(success);
        test.done();
    });
};

// Unsuccessful login: bad username
exports[ 'login with bad username' ] = function(test){
    test.expect(1);
    users.retrieve('badusername','password', function(success){
        test.ok(!success);
        test.done();
    });
};

// Unsuccessful login: bad password
exports[ 'login with bad password' ] = function(test){
    test.expect(1);
    users.retrieve('username','badpassword', function(success){
        test.ok(!success);
        test.done();
    });
};


// Empty the database and close the connection
exports[ 'cleanup' ] = function(test){
    users.deleteAll(function(){
        users.close(function(){
            test.done();
        });
    });
};