


module.exports = {
    getLeagues: getLeagues
}

function LeagueDto(id, name, acronym) {
    this.id = id;
    this.name = name;
    this.acronym = acronym;
}

const memoise = require("../utils/memoise")(false)

const requestOrig = require("request")

// Uncoment this line to use memoisation
//const request = memoise(requestOrig)

// Uncoment this line to not use memoisation
const request = requestOrig




const BASE_URL = "http://api.football-data.org/v1/"

function getLeagues(cb) {
    let url = BASE_URL + "soccerseasons/";

    request(url, (err, rsp, body) =>  {
        if(err) 
            return cb(err)
        cb(null, JSON.parse(body).map(l => new LeagueDto(l.id, l.caption, l.league)))
    })
}