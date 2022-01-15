const express = require('express')
const cors = require('cors')
const path = require('path')
const moviesRouter = require('./controllers/movies')
const seriesRouter = require('./controllers/series')
const config = require('../config.json')

// Initializations
const app = express()

// Settings
app.set('port', config.port ?? 3001)

// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Have Node serve the files for our built React app
app.use(express.static('../client/dist'))

console.log(path.join(__dirname, '../../client/dist/index.html'))

// Routes
app.use('/api/movies', moviesRouter)
app.use('/api/series', seriesRouter)
app.get('/*', (_req, res) => { res.sendFile(path.join(__dirname, '../../client/dist/index.html')) })

module.exports = app
