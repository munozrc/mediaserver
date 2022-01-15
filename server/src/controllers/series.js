const { statSync, createReadStream } = require('fs')
const { getConnection } = require('../database')
const { normalizeSerie } = require('../utils')
const router = require('express').Router()

router.get('/subtitle', (req, res) => {
  const { serie, episode, source, lang } = req.query
  const series = getConnection().get('series').value()

  const findSerie = series.find(({ id }) => id === serie)
  if (typeof findSerie === 'undefined') return res.send({ message: 'serie not found' })

  const findEpisode = findSerie.episodes.find(({ id }) => id === parseFloat(episode))
  if (typeof findEpisode === 'undefined') return res.send({ message: 'episode not found' })

  const subtitle = findEpisode.sources[parseInt(source)].subtitles.find(sub => sub.srcLang === lang)
  if (typeof subtitle === 'undefined') return res.send('')

  res.sendFile(subtitle.src)
})

router.get('/media', (req, res) => {
  const { serie, episode } = req.query
  const series = getConnection().get('series').value()

  const findSerie = series.find(({ id }) => id === serie)
  if (typeof findSerie === 'undefined') return res.send({ message: 'serie not found' })

  const findEpisode = findSerie.episodes.find(({ id }) => id === parseFloat(episode))
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
  const series = getConnection().get('series').value()
  const normalizeSeries = series.map(normalizeSerie)

  res.send({ series: normalizeSeries })
})

module.exports = router
