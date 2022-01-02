const express = require('express')
const cors = require('cors')
const path = require('path')
const moviesRouter = require('./controllers/movies')

// Initializations
const app = express()

// Settings
app.set('port', process.env.PORT || 3001)

// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Have Node serve the files for our built React app
app.use(express.static('../client/dist'))

// Routes
app.use('/api/movies', moviesRouter)
app.get('/*', (_req, res) => { res.sendFile(path.join(__dirname, '../../client/dist/index.html')) })

module.exports = app
