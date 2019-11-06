const express = require('express');
const bodyparser = require('body-parser');
const stockRoutes = require('./routes/stockRoutes.js');
const app = express();

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

app.use('/stock', stockRoutes);

app.use((req, res, next) => {
    res.status(400).json({
        message: '404 found'
    });
});
module.exports = app;
