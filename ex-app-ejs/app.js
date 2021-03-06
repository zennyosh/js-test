var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var hello = require('./routes/hello');
var rss = require('./routes/rss');
var ops = require('./routes/ops');
var ops2 = require('./routes/ops2');
var ajax = require('./routes/ajax');

var app = express();

var session_opt = {
  secret: 'keyboad cat',
  resave: false,
  saveUninitialized: false,
  cokkie: {maxAge: 60*60*1000}
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(session_opt));

app.use('/'     , routes);
app.use('/users', users);
app.use('/hello', hello);
app.use('/rss'  , rss);
app.use('/ops'  , ops);
app.use('/ops2' , ops2);
app.use('/ajax' , ajax);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
