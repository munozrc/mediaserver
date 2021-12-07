const express = require('express')
const moviesRouter = require('./controllers/movies')

// Initializations
const app = express()

// Settings
app.set('port', process.env.PORT || 3001)

// Routes
app.get('/', (_req, res) => { res.send({ message: 'Welcome to the API Media Server' }) })
app.use('/api/movies', moviesRouter)

module.exports = app
