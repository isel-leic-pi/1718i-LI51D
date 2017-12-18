const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport')
const session = require("express-session")
const hbs = require("hbs")



// create all data accesses
const usersDa = require('./data/users-data-access-mem');
const leaguesDa = require('./data/leagues-data-access-local');


// create all services
const usersService = require('./services/users-service')(usersDa);
const leaguesService = require('./services/leagues-service')(leaguesDa);

// create all controller
const index = require('./routes/index');
const users = require('./routes/users-controller')(usersService);
const leagues = require('./routes/leagues-controller')(leaguesService);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "glorioso36", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  res.locals.user = req.user ? req.user.username : "<anonymous>";
  next();
});

app.use('/', index);
app.use('/leagues/', leagues);
app.use('/users/', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
