'use strict';

const express = require('express'),
    morgan = require('morgan'),
    uPrepApp = express();


// load environment variables
require('dotenv').config();


// log request tot the console
uPrepApp.use(morgan('dev'));

// serve static files
uPrepApp.use(express.static('public'));

//setup basic route
uPrepApp.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: 'public'
    });
});

// start the server
uPrepApp.listen(process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT);
});
