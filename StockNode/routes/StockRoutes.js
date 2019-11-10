const express = require('express');
const router = express.Router();
const axios = require('axios')
require('dotenv').config()
const url = 'https://www.alphavantage.co/query';

router.get('/value', function (req, res) {
    var url_value = url
        + "?function=" + req.query.function
        + "&from_currency=" + req.query.from_currency
        + "&to_currency=" + req.query.to_currency
        + "&apikey=" + process.env.API_KEY;

    axios.get(url_value)
        .then(response => {
            if (response.status === 200) {
                res.send(response.data);
            } else {
                console.log(response.status)
            }
        }).catch(error => { console.log(error); })
})
module.exports = router;