const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Me');

const PORT = process.env.PORT || 3000;

express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true}))
    .use('/user', require('./routes/user'))
    .get('/', (req, res) => res.send('<h1>Hello, World!</h1>'))
    .listen(PORT, () => console.log(`Listening at ${PORT}`));
