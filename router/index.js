const express = require('express');
const { handleError } = require('../middleware/error');
const errorRoute = require('./error')

module.exports = function(app) {
    app.use(express.json());
    app.get('/', (req, res) => {
        return res.status(200).json('Hello world');
    })
    app.use('/api', errorRoute);
    app.use(handleError);
}