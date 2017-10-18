'use strict'

const PORT = 3000;

const http = require('http')

const connect = require('./connect-chelas')

const app = connect();

// Current aplication supports the folowing endpints
// GET /leagues
// GET /teams
// GET /league/id-league
// GET /team/id-team

app.get('/leagues', showLeagues);
app.get('/teams', showTeams);
//connect.get('/league/:id-league', showLeagues);

function showLeagues(req, rsp) {
    rsp.statusCode = 200
    rsp.statusMessage = "SLB"
    rsp.setHeader('Content-Type', 'text/plain')

    rsp.end("GET Show Leagues")
}

function showTeams(req, rsp) {
    rsp.statusCode = 200
    rsp.statusMessage = "SLB"
    rsp.setHeader('Content-Type', 'text/plain')

    rsp.end("GET Show Teams")
}


const server = http.createServer(app);

server.listen(PORT, serverListening);

function serverListening(err, data) {
    if(err) {
        console.log(`Could not listen on port ${PORT}, because of the following error: ${err}`);
        return;
    }
    console.log(`Server running on port ${PORT}`)
}


