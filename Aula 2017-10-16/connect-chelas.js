

module.exports = function() {
    const handlers = {
        get: [],
        put: [],
        post: [],
        delete: []

    };

    var connectResp = function(req, rsp) {

        
        var handler = handlers[req.method.toLowerCase()].find(handler => req.url.includes(handler.uri))

        handler.cb(req, rsp)
    }

    connectResp.get = function(uri, cb) {
        handlers.get.push({uri: uri, cb: cb })
    }

    connectResp.put = function(uri, cb) {
        handlers.put.push({uri: uri, cb: cb })
    }

    return connectResp;
}