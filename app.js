
const http = require('http');

const expressServer = require('./server');

const app = http.createServer(expressServer);

const port = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log('Server Started');
})

