


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




const leagues = [
    {
        id:1,
        caption: "L1",
        league: "Liga1"

    },
    {
        id:2,
        caption: "L2",
        league: "Liga2"

    },
    {
        id:3,
        caption: "L3",
        league: "Liga3"

    },
    {
        id:4,
        caption: "L4",
        league: "Liga4"

    }
];


function getLeagues(cb) {
        cb(null, leagues.map(l => new LeagueDto(l.id, l.caption, l.league)))
}