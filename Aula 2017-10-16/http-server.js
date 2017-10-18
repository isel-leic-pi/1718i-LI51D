'use strict'

const PORT = 3000;

const http = require('http')

const server = http.createServer(processRequest);

server.listen(PORT, serverListening);

function serverListening(err, data) {
    if(err) {
        console.log(`Could not listen on port ${PORT}, because of the following error: ${err}`);
        return;
    }
    console.log(`Server running on port ${PORT}`)
}


function processRequest(req, rsp) {
    rsp.statusCode = 200
    rsp.statusMessage = "SLB"
    rsp.setHeader('Content-Type', 'text/plain')

    console.log(req.url);
    console.log(req.headers['user-agent'])

    rsp.end("Hello World")
}
