
var express = require('express');
var router = express.Router();


const debug = require("debug")("soccer-app:controller")


module.exports = function (leaguesService) {
    router.get('/', showLeagues)
    router.get('/search-partial', showLeaguesPartial)
    router.get('/:id', showLeague)

    return router;

    function showLeaguesPartial(req, rsp) {
        getLeagues(leaguesService, req.query.search, leagues => rsp.render("partials/leagues-partial", { leagues: leagues, layout: null }))
    }

    function showLeagues(req, rsp) {
        getLeagues(leaguesService, req.query.search, leagues => rsp.render("leagues", { leagues: leagues }))
    }



    function showLeague(req, rsp) {
        console.log(req.params.id)
        console.log(req.query.id)
        rsp.render('leagueDetails', { leagueId: req.query.id })
    }
}


function getLeagues(leaguesService, search, render) {
    leaguesService.getLeagues(processLeagues)

        function processLeagues(err, leagues) {
            leagues = toLeaguesPresentationModel(leagues)
            console.log("leagues:")
            console.log(leagues)
            render(leagues)


            function toLeaguesPresentationModel(leagues) {
                if (search)
                    leagues = leagues.filter(l => l.name.toLowerCase().includes(search.toLowerCase()));


                leagues.forEach((l, i) => l.cls = (i + 1) % 2 == 0 ? "even" : "odd")
                return leagues;
            }
        }
}





