var debug = require("debug")("soccer-app:routing-chelas")



module.exports = function() {
    const handlers = {
        get: [],
        put: [],
        post: [],
        delete: []

    };

    var connectResp = function(req, rsp) {
        debug(`Request for uri ${req.url}`)
        
        var handler = handlers[req.method.toLowerCase()].find(handler => req.url.includes(handler.uri))
        if(handler)
            return handler.cb(req, rsp)
        notFoundHandler(req, rsp);
    }

    connectResp.get = function(uri, cb) {
        handlers.get.push({uri: uri, cb: cb })
    }

    connectResp.put = function(uri, cb) {
        handlers.put.push({uri: uri, cb: cb })
    }

    return connectResp;
}


function notFoundHandler(req, rsp) {
    rsp.statusCode = 404;

    rsp.setHeader('Content-Type', 'text/plain')

    rsp.end("Resource not found")
}