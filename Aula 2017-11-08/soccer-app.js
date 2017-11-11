'use strict'

const PORT = 3000;

const http = require('http')

const connect = require('./routing-chelas')
const controller = require('./controller')

const app = connect();

// Current aplication supports the folowing endpints
// GET /leagues
// GET /league/{id-league}

app.get('/leagues', controller.showLeagues);
//app.get('/leagues/:id', showLeague);



const server = http.createServer(app);

server.listen(PORT, serverListening);

function serverListening(err, data) {
    if(err) {
        console.log(`Could not listen on port ${PORT}, because of the following error: ${err}`);
        return;
    }
    console.log(`Server running on port ${PORT}`)
}


