
module.exports = {
    showLeagues: showLeagues,
    showLeague: showLeague
}

const dataAccess = require("./data-access")
const debug = require("debug")("soccer-app:controller")


function showLeagues(req, rsp) {
    
        // Make API request
        // Parse the response to JavaScript objects
        // Generate HTML with the objects representing the response

        dataAccess.getLeagues(processLeagues)

        function processLeagues(err, leagues) {
            rsp.render("leagues", toLeaguesPresentationModel(leagues))


            function toLeaguesPresentationModel(leagues) {
                leagues.forEach((l, i) => l.cls = (i+1) % 2 == 0 ? "even" : "odd" )
                return leagues;
            }
        }
    }
    
    function showLeague(req, rsp) {
        console.log(req.params.id)
        rsp.render('leagueDetails', { leagueId: req.params.id })
    }
    
    

    