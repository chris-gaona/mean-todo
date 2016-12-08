'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

var port = process.env.PORT || 3000

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(port, function() {
    console.log('The server is running on port ' + port);
});
