
module.exports = {
    showLeagues: showLeagues,
    showLeague: showLeague
}

const dataAccess = require("./data-access")
const debug = require("debug")("soccer-app:controller")
const view = require("./view")


function showLeagues(req, rsp) {
    
        // Make API request
        // Parse the response to JavaScript objects
        // Generate HTML with the objects representing the response

        dataAccess.getLeagues(processLeagues)

        function processLeagues(err, leagues) {
            view("leagues", leagues, processViewContent)

            function processViewContent(err, viewStr) {
                if(err) {
                    throw err;
                }
                rsp.end(viewStr)
            }    
        }
    }
    
    function showLeague(req, rsp) {
        rsp.statusCode = 200
        rsp.statusMessage = "SLB"
        rsp.setHeader('Content-Type', 'text/plain')
    
        rsp.end("GET Show Teams")
    }
    
    

    