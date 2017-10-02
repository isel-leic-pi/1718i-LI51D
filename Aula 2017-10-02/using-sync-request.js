var request = require('sync-request');
var res = request('GET', 'http://api.football-data.org/v1/soccerseasons/');
var leagues = JSON.parse(res.getBody().toString());

console.log(leagues);