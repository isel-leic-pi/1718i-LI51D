var request = require('request');
var processResponse = require('./process-response');

request.get("http://api.football-data.org/v1/soccerseasons/", processResponse);

console.log("nothing more to do right now...");