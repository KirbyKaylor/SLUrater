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
app.post('/createpage', require('./routes/createpage'));
app.get('/profile', require('./routes/profile'));
app.get('/dining', require('./routes/dining'));
app.get('/housing', require('./routes/housing'));
app.get('/buildings', require('./routes/buildings'));
app.get('/courses', require('./routes/courses'));
app.get('/events', require('./routes/events'));
app.get('/logout', require('./routes/logout'));

// Default route
app.get('*', function(request,response) {
    response.send('Nothing to see here!');
});

// Start the server
app.listen(8080);
console.log('Server is up.');