const express = require('express');
const router = express.Router();

router.post('/value', function (req, res) {
    console.log('inside value');
    res.send("inside Stock module");
})
module.exports = router;