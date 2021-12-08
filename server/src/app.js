const express = require('express')
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

// Routes
app.get('/', (_req, res) => { res.send({ message: 'Welcome to the API Media Server' }) })
app.use('/api/movies', moviesRouter)

module.exports = app
