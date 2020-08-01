const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


// import route handlers
const auth = require('./routes/auth')
const comps = require('./routes/comps')

// add route handlers
app.use('/auth', auth)
app.use('/comps', comps)

// catch invalid request
app.use('/', (req, res) => {
    res.status(404).send("Route not found")
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Listening on port " + port)
})

// for route feature flags
const middleware = (req, res, next) => {
    next()
}