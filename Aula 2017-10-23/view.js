module.exports = {
showLeagues: showLeagues

}

function showLeagues(leaguesDto) {
    let rsp = `
        <html>
            <head>
                <title>Leagues</title>
            </head>
            <body>
                <h1>Soccer Leagues</h1>
                <ul>`

    rsp = leaguesDto.reduce( (acc, l) => acc + getLeagueHtml(l), rsp);
                
    rsp +=  `</ul>
            </body>
        </html>        
    `

    return rsp;

    function getLeagueHtml(l) {
        return `<li><a href="/league/${l.id}">${l.name}(${l.acronym})</a></li>`
    }
}

