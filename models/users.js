// A model for a visitor collection
var mongojs = require('mongojs');
var bcrypt = require('bcrypt');

// Access the database
var db = mongojs('SLUrater', ['users']);

// Register a new user
module.exports.create = function(name, password, callback) {
    bcrypt.hash(password, 10, function(error,hash) {
        if (error) throw error;
        
        db.users.findAndModify({
            query: {name:name},
            update: {$setOnInsert:{password:hash, ban:false, admin:false}},
            new: true,
            upsert: true
            
        }, function(error, user) {
            if (error) throw error;
            
            callback(user.password == hash);
        });
    });
};

// Verify login credentials
module.exports.retrieve = function(name, password, callback) {
    
    db.users.findOne({name:name}, function(error, user) {
        if (error) throw error;
        
        if (!user) {
            callback(false);
        }
        else {
            if (user.ban) {
                callback(false);
            }
            else {
            bcrypt.compare(password, user.password, function(error, success) {
                if (error) throw error;
                
                callback(success);
            })};
        }
    });
};

// Delete all users
module.exports.deleteAll = function(callback){
    db.users.remove({}, function(error) {
        if (error) throw error;
        callback();
    });
};

// Close the connection
module.exports.close = function(callback){
    db.close(function(error) {
        if (error) throw error;
        callback();
    });
};

// Retrieve all the usernames
module.exports.retrieveUsers  = function (callback) {
    db.users.find({}, function(error, usernames) {
        if (error) throw error;
        
        callback(usernames);
    });
}

// Ban a user
module.exports.ban = function(userid, callback) {
    db.users.update(
            {_id:mongojs.ObjectId(userid)},
            {$set: {ban:true}});
    callback(true);
}

// Remove a band on a user
module.exports.liftban = function(userid, callback) {
    db.users.update(
            {_id:mongojs.ObjectId(userid)},
            {$set: {ban:false}});
    callback(true);
}

// Make a user an admin
module.exports.addAdmin = function(userid, callback) {
    db.users.update(
            {_id:mongojs.ObjectId(userid)},
            {$set: {admin:true}});
    callback(true);
}

// delete a user as an admin
module.exports.removeAdmin = function(userid, callback) {
    db.users.update(
            {_id:mongojs.ObjectId(userid)},
            {$set: {admin:false}});
    callback(true);
}

// Delete a user based on username from deactivate
module.exports.deleteUserName = function(username, callback) {
    db.users.remove({name:username}, function(error) {
        if (error) throw error;
        callback();
    });
};

// find user based on name

module.exports.findUser = function (name, callback) {
    db.users.findOne({name: name}, function(error, user) {
        if (error) throw error;
        
        callback(user);
    });
}