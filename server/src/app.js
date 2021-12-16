const express = require('express')
const path = require('path')
const cors = require('cors')
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
app.use(express.static(path.join(__dirname, '../../client/dist')))

// Routes
app.get('/', (_req, res) => { res.sendFile(path.join(__dirname, '../../client/dist', 'index.html')) })
app.use('/api/movies', moviesRouter)

module.exports = app
