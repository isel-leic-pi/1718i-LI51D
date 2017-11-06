const dataAccess = require("../data-access")


module.exports = {
    shouldObtainAllLeagues: function(test) {
        dataAccess.getLeagues(processLeagues);

        function processLeagues(err, leagues) {
            test.expect(4)
            test.ifError(err, "Error getting leagues")
            test.ok(leagues)
        
            test.ok(leagues instanceof Array, "leagues should be an array")
            test.ok(leagues.length > 0, "leagues array should contain at least one league")
            test.done()
        }
    }
}