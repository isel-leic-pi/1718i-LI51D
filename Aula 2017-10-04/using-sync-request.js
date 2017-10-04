var request = require('sync-request');
var processResponse = require('./process-response');

var res = request('GET', 'http://api.football-data.org/v1/soccerseasons/');
var leagues = JSON.parse(res.getBody().toString());

processResponse(null, res, res.getBody().toString());

console.log("nothing more to do right now...");