var express = require('express');
var bodyParse = require('body-parser');

var port = Number(process.env.PORT || 7478);

var saversAPI = express();

var db = require('./models/database');
var sGroup    = require('./models/savingsgroup');
var savings = require('./controllers/savingscontroller');

var routes = require('./routes/savings');


saversAPI.use('/api', routes);

saversAPI.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

saversAPI.listen(port, function () {
    console.log('Listening on Port: *:' + port);
});