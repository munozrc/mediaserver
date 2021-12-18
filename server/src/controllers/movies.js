const fs = require('fs')
const router = require('express').Router()
const { normalizeMovies } = require('../utils')
const { getConfigFile } = require('../utils/files')

router.get('/', (_req, res) => {
  const list = getConfigFile('../data/movies.json')
  const movies = list.map(normalizeMovies)
  res.send({ movies })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const moviesList = getConfigFile('../data/movies.json')
  const findMovie = moviesList.find(movie => movie.id === id)

  if (typeof findMovie === 'undefined') return res.send({ message: 'movie not found' })

  const { range } = req.headers
  const stat = fs.statSync(findMovie.source)

  if (range) {
    const [partialStart, partialEnd] = range.replace(/bytes=/, '').split('-')
    const start = parseInt(partialStart, 10)
    const end = partialEnd ? parseInt(partialEnd, 10) : stat.size - 1
    const file = fs.createReadStream(findMovie.source, { start: start, end: end })

    res.writeHead(206, {
      'Content-Range': 'bytes ' + start + '-' + end + '/' + stat.size,
      'Accept-Ranges': 'bytes',
      'Content-Length': (end - start) + 1,
      'Content-Type': 'video/mp4'
    })

    file.pipe(res)
  } else {
    res.writeHead(200, { 'Content-Length': stat.size, 'Content-Type': 'video/mp4' })
    fs.createReadStream(findMovie.source).pipe(res)
  }
})

router.get('/subtitles/:id', (req, res) => {
  const { id } = req.params
  const moviesList = getConfigFile('../data/movies.json')
  const findMovie = moviesList.find(movie => movie.id === id)

  if (typeof findMovie === 'undefined') return res.send({ message: 'movie not found' })
  res.sendFile(findMovie.subtitles)
})

module.exports = router
