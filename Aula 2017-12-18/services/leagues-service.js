
module.exports = function (dataAccess) {
    return {
        getLeagues: getLeagues
    }


    function getLeagues(cb) {
        dataAccess.getLeagues(cb)
    }
}