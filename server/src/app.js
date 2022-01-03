import { fileURLToPath } from 'url'
import express from 'express'
import moviesRouter from './controllers/movies.js'
import seriesRouter from './controllers/series.js'
import path from 'path'
import cors from 'cors'

// Initializations
const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

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
app.use('/api/series', seriesRouter)
app.get('/*', (_req, res) => { res.sendFile(path.join(__dirname, '../../client/dist/index.html')) })

export default app
