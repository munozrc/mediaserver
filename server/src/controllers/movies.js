const fs = require('fs')
const router = require('express').Router()
const { normalizeMovie } = require('../utils')
const { getConfigFile } = require('../utils/files')

router.get('/subtitle', (req, res) => {
  const { id, source, lang } = req.query
  const moviesList = getConfigFile('../data/movies.json')

  const movie = moviesList.find(movie => movie.id === id)
  if (typeof movie === 'undefined') return res.send('')

  const subtitle = movie.sources[parseInt(source)].subtitles.find(sub => sub.srcLang === lang)
  if (typeof subtitle === 'undefined') return res.send('')

  res.sendFile(subtitle.src)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const moviesList = getConfigFile('../data/movies.json')
  const findMovie = moviesList.find(movie => movie.id === id)

  if (typeof findMovie === 'undefined') return res.send({ message: 'movie not found' })

  const { range } = req.headers
  const pathSourceMovie = findMovie.sources[0].path
  const stat = fs.statSync(pathSourceMovie)

  if (range) {
    const [partialStart, partialEnd] = range.replace(/bytes=/, '').split('-')
    const start = parseInt(partialStart, 10)
    const end = partialEnd ? parseInt(partialEnd, 10) : stat.size - 1
    const file = fs.createReadStream(pathSourceMovie, { start: start, end: end })

    res.writeHead(206, {
      'Content-Range': 'bytes ' + start + '-' + end + '/' + stat.size,
      'Accept-Ranges': 'bytes',
      'Content-Length': (end - start) + 1,
      'Content-Type': 'video/mp4'
    })

    file.pipe(res)
  } else {
    res.writeHead(200, { 'Content-Length': stat.size, 'Content-Type': 'video/mp4' })
    fs.createReadStream(pathSourceMovie).pipe(res)
  }
})

router.get('/', (req, res) => {
  const { protocol, hostname } = req
  const list = getConfigFile('../data/movies.json')

  const originURL = `${protocol}://${hostname}:${process.env.PORT || 3001}/api`
  const movies = list.map((movie) => normalizeMovie({ movie, originURL }))
  res.send({ movies })
})

module.exports = router
