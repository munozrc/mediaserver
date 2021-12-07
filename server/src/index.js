const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
  const { range } = req.headers
  const path = 'example.mp4'
  const stat = fs.statSync(path)

  if (range) {
    const [partialStart, partialEnd] = range.replace(/bytes=/, '').split('-')
    const start = parseInt(partialStart, 10)
    const end = partialEnd ? parseInt(partialEnd, 10) : stat.size - 1
    const file = fs.createReadStream(path, { start: start, end: end })

    res.writeHead(206, {
      'Content-Range': 'bytes ' + start + '-' + end + '/' + stat.size,
      'Accept-Ranges': 'bytes',
      'Content-Length': (end - start) + 1,
      'Content-Type': 'video/mp4'
    })

    file.pipe(res)
  } else {
    res.writeHead(200, { 'Content-Length': stat.size, 'Content-Type': 'video/mp4' })
    fs.createReadStream(path).pipe(res)
  }
})

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app, server }
