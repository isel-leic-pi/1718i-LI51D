
var express = require('express');
var router = express.Router();

module.exports = router;


router.get('/', showLeagues)
router.get('/search', showSearch)
router.get('/:id', showLeague)


const dataAccess = require("../data/data-access")
const debug = require("debug")("soccer-app:controller")


function showSearch(req, rsp) {
    rsp.render('search-leagues')
}

function showLeagues(req, rsp) {
    
        // Make API request
        // Parse the response to JavaScript objects
        // Generate HTML with the objects representing the response

        dataAccess.getLeagues(processLeagues)

        function processLeagues(err, leagues) {
            leagues = toLeaguesPresentationModel(leagues)
            console.log("leagues:")
            console.log(leagues)
            rsp.render("leagues", { leagues: leagues })


            function toLeaguesPresentationModel(leagues) {
                if(req.query.search)
                    leagues = leagues.filter(l => l.name.toLowerCase().includes(req.query.search.toLowerCase()));

                
                leagues.forEach((l, i) => l.cls = (i+1) % 2 == 0 ? "even" : "odd" )
                return leagues;
            }
        }
    }
    
    function showLeague(req, rsp) {
        console.log(req.params.id)
        console.log(req.query.id)
        rsp.render('leagueDetails', { leagueId: req.query.id })
    }
    
    

    