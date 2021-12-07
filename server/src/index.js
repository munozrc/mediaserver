const express = require('express')
const app = express()

// Routers
const moviesRouter = require('./controllers/movies')

app.get('/', (_req, res) => {
  res.send({ message: 'Welcome to the API Media Server' })
})

app.use('/api/movies', moviesRouter)

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app, server }
