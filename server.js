
const express = require('express');
const defaultController = require('./src/controllers/default.controller');
const server = express();

server.use('/api/v1', defaultController);

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log('Server Started');
})
