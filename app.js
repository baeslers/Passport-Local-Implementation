var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var logger = require('morgan');
var passport = require('passport');
var methodOverride = require('method-override');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.js');
require('./config/passport.js')(passport, LocalStrategy);
var app = express();

/* configuration */
var db = require('./config/db.js');
mongoose.connect(db.db);
/* end config */


var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({secret: 'hola!', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('combined'));
app.use(express.static(__dirname + '/public'));


require('./routes/admin.js')(app,passport);
require('./routes/main.js')(app,passport);





app.listen(port);

console.log('listening on ' + port);

