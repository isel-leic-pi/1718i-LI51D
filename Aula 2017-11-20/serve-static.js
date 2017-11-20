var path = require('path');
var fs = require('fs');
var mimeTypes = require("mime-types")


module.exports = function(rootDir) {
    return function(req, rsp, next) {
        const fileName = path.join(rootDir, req.path);
        console.log("file to serve " + fileName);

        if(fs.existsSync(fileName) && fs.statSync(fileName).isFile()) {
            return returnFile(fileName);
        }
        next();
        function returnFile(filePath) {
            console.log("serving file " + filePath)
            
            fs.readFile(filePath, returnFileContents)

            function returnFileContents(err, data) {
                if(err) {
                    rsp.status = 500;
                    rsp.end("Error geting file")
                    return;
                }

                let ct = mimeTypes.lookup(filePath)
                console.log("Mime Type: " + ct)
                rsp.writeHead(200, { 'Content-Type': ct })
                rsp.contentType = ct;
                rsp.end(data);
            }
        }
    }
}