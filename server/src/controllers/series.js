import { Router } from 'express'
import { statSync, createReadStream } from 'fs'
import { getConnection } from '../database.js'

const router = new Router()

router.get('/media', (req, res) => {
  const { serie, episode } = req.query
  const { series } = getConnection().data

  const findSerie = series.find(({ id }) => id === serie)
  if (typeof findSerie === 'undefined') return res.send({ message: 'serie not found' })

  const findEpisode = findSerie.episodes.find(({ id }) => id === episode)
  if (typeof findEpisode === 'undefined') return res.send({ message: 'episode not found' })

  // Ensure there is a range given for the video
  const range = req.headers.range
  if (!range) return res.status(400).send('Requires Range header')

  // get video stats (about 61MB)
  const videoPath = findEpisode.sources[0].path
  const videoSize = statSync(findEpisode.sources[0].path).size

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

router.get('/', (_req, res) => {
  const { series } = getConnection().data
  res.send({ series })
})

export default router
