
var express = require('express');
var router = express.Router();

module.exports = router;


router.get('/', showLeagues)
router.get('/search', showSearch)
router.get('/search-partial', showLeaguesPartial)
router.get('/:id', showLeague)


const leaguesService = require("../services/leagues-service")
const debug = require("debug")("soccer-app:controller")


function showSearch(req, rsp) {
    rsp.render('search-leagues', {username: req.user.username})
}


function showLeaguesPartial(req, rsp) {
}

function showLeagues(req, rsp) {
    
        // Make API request
        // Parse the response to JavaScript objects
        // Generate HTML with the objects representing the response



        leaguesService.getLeagues(processLeagues)

        function processLeagues(err, leagues) {
            leagues = toLeaguesPresentationModel(leagues)
            console.log("leagues:")
            console.log(leagues)
            rsp.render("leagues", { leagues: leagues })


            function toLeaguesPresentationModel(leagues) {
                var search = req.query.search
                if(search)
                    leagues = leagues.filter(l => l.name.toLowerCase().includes(search.toLowerCase()));

                
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
    
    

    