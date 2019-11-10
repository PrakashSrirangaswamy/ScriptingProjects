const http = require('http');
const app = require('./app.js');
require('dotenv').config();
const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, (value) => {
    console.log("Listening to ", 'http://localhost:' + port);
});
