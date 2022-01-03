import { Router } from 'express'
import { statSync, createReadStream } from 'fs'
import { getConnection } from '../database.js'
import { normalizeMovie } from '../utils/index.js'

const router = new Router()

router.get('/subtitle', (req, res) => {
  const { id, source, lang } = req.query
  const { movies } = getConnection().data

  const movie = movies.find(movie => movie.id === id)
  if (typeof movie === 'undefined') return res.send('')

  const subtitle = movie.sources[parseInt(source)].subtitles.find(sub => sub.srcLang === lang)
  if (typeof subtitle === 'undefined') return res.send('')

  res.sendFile(subtitle.src)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const { movies } = getConnection().data

  const findMovie = movies.find(movie => movie.id === id)
  if (typeof findMovie === 'undefined') return res.send({ message: 'movie not found' })

  // Ensure there is a range given for the video
  const range = req.headers.range
  if (!range) return res.status(400).send('Requires Range header')

  // get video stats (about 61MB)
  const videoPath = findMovie.sources[0].path
  const videoSize = statSync(findMovie.sources[0].path).size

  // Parse Range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 ** 6 // 1MB
  const start = Number(range.replace(/\D/g, ''))
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1)

  // Create headers
  const contentLength = end - start + 1
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4'
  }

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers)

  // create video read stream for this particular chunk
  const videoStream = createReadStream(videoPath, { start, end })

  // Stream the video chunk to the client
  videoStream.pipe(res)
})

router.get('/', (req, res) => {
  const { protocol, hostname } = req
  const { movies } = getConnection().data

  const originURL = `${protocol}://${hostname}:${process.env.PORT || 3001}/api`
  const normalizeMovies = movies.map((movie) => normalizeMovie({ movie, originURL }))

  res.send({ movies: normalizeMovies })
})

export default router
