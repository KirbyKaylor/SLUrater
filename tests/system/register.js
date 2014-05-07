// Tests for use cases at the index route
var users = require('../../models/users');
var zombie = require('zombie');
var browser = new zombie();

// Empty the database
exports['setup'] = function(test) {
    users.deleteAll(function() {
        test.done();
    });
};

exports['make an account (success)'] = function(test) {
    test.expect(2);
    
    browser.visit('http://localhost:8080/', function() {
        test.ok(browser.query('#register'));
        
        browser.
            fill('#register_name', 'username').
            fill('#register_password', 'password').
            pressButton('#register_submit', function() {
                test.ok(browser.query('#logout'));
                browser.clickLink('#logout', function() {
                    test.done();
                });
            });
    });
}
exports['make an account (failure)'] = function(test) {
    test.expect(2);
    
    browser.visit('http://localhost:8080/', function() {
        test.ok(browser.query('#register'));
        
        browser.
            fill('#register_name', 'username').
            fill('#register_password', 'password').
            pressButton('#register_submit', function() {
                test.ok(browser.query('#error'));
                test.done();
            });
    });
}

exports['log in (success)'] = function(test) {
    test.expect(2);
    
    browser.visit('http://localhost:8080/', function() {
        test.ok(browser.query('#login'));
        
        browser.
            fill('#login_name', 'username').
            fill('#login_password', 'password').
            pressButton('#login_submit', function() {
                test.ok(browser.query('#logout'));
                browser.clickLink('#logout', function() {
                    test.done();
                });
            });
    });
}

exports['log in (failure)'] = function(test) {
    test.expect(2);
    
    browser.visit('http://localhost:8080/', function() {
        test.ok(browser.query('#login'));
        
        browser.
            fill('#login_name', 'badusername').
            fill('#login_password', 'badpassword').
            pressButton('#login_submit', function() {
                test.ok(browser.query('#error'));
                test.done();
            });
    });
}

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    users.deleteAll(function() {
        users.close(function() {
            test.done();
        });
    });
};