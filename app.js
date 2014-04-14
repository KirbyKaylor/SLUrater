// Server for SLUrater
var express = require('express');
var app = express();

// Configure the server
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.urlencoded({limit:'1kb'}));
app.use(express.static(__dirname+'/statics'));

// Enable sessions
app.use(express.cookieParser());
app.use(express.session({secret:'This session'}));

// Route the requests
//app.get('/', require('./routes/'));
app.post('/register', require('./routes/register'));
app.post('/login', require('./routes/login'));
//app.get('/logout', require('./routes/logout'));
//app.get('*', require('./routes/default'));

// Default route
app.get('*', function(request,response) {
    response.send('Nothing to see here!');
});

// Start the server
app.listen(8080);
console.log('Server is up.');
