const dataAccess = require("../data/leagues-data-access")


module.exports = {
    getLeagues: getLeagues
}


function getLeagues(cb) {
   dataAccess.getLeagues(cb)
}