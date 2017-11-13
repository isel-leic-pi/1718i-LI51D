'use strict'
const debug = require("debug")("soccer-app:main")

const PORT = 3000;

const http = require('http')

const express = require('express')
const controller = require('./controller')

const app = express();

// Configure application properties
app.set('views', './views')
app.set('view engine', 'hbs')

// Current aplication supports the folowing endpints
// GET /leagues
// GET /league/{id-league}



app.use(requestTimeMiddleware, logMiddleware, authorizationMiddleware)


app.get('/leagues', (req, rsp, next) => {
    debug("SLB")
    next();
    }, controller.showLeagues)
app.get('/leagues/:id', controller.showLeague)


function requestTimeMiddleware(req, rsp, next) {
    const startDate = new Date();
    rsp.on('finish', () => {
        const endDate = new Date();
        debug(`Request took ${endDate-startDate} ms`)
    })
    next()  
    const endDate = new Date();
    debug(`next call return took ${endDate-startDate} ms`)
}

function logMiddleware(req, rsp, next) {
    debug(`Request ${req.method} for uri ${req.originalUrl}`)
    next()
}

function authorizationMiddleware(req, rsp, next) {
    if (req.originalUrl.startsWith('/leagues'))
        return next()

    rsp.statusCode = 403;
    rsp.end("Not authorized")
}

// const server = http.createServer(app);
app.listen(PORT, serverListening);

function serverListening(err, data) {
    if (err) {
        console.log(`Could not listen on port ${PORT}, because of the following error: ${err}`);
        return;
    }
    console.log(`Server running on port ${PORT}`)
}


