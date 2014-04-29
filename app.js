// Server for SLUrater
var express = require('express');

// Create a server
var app = express();

// Configure the server
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.urlencoded({limit:'1kb'}));
app.use(express.static(__dirname+'/statics'));

// Enable sessions
app.use(express.cookieParser());
app.use(express.session({secret:'SLUrater session'}));

// Route the requests
app.get('/', require('./routes/index'));
app.post('/login', require('./routes/login'));
app.post('/register', require('./routes/register'));
app.get('/profile', require('./routes/profile'));
app.get('/dining', require('./routes/dining'));
app.get('/housing', require('./routes/housing'));
app.get('/buildings', require('./routes/buildings'));
app.get('/courses', require('./routes/courses'));
app.get('/events', require('./routes/events'));
app.get('/logout', require('./routes/logout'));
app.post('submitcomment', require('./routes/submitcomment'));
app.get('/create_form', require('./routes/create_form'));
app.post('/createpage', require('./routes/createpage'));
app.get('/diningpage/:id', require('./routes/diningpage'));
app.get('/housingpage/:id', require('./routes/housingpage'));
app.get('/buildingspage/:id', require('./routes/buildingspage'));
app.get('/rate/:id', require('./routes/rate'));
app.post('/comment', require('./routes/comment'));
app.get('/users', require('./routes/users'));
app.get('/ban/:id', require('./routes/ban'));
app.get('/liftban/:id', require('./routes/liftban'));
app.get('/addadmin/:id', require('./routes/addadmin'));
app.get('/removeadmin/:id', require('./routes/removeadmin'));


// Default route
app.get('*', function(request,response) {
    response.send('Nothing to see here!');
});

// Start the server
app.listen(8080);
console.log('Server is up.');