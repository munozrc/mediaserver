const { readdirSync, writeFileSync, statSync } = require('node:fs')
const { join, parse } = require('node:path')
const { movies } = require('../../config.json')
const { v4: uuidv4 } = require('uuid')
const { getConnection } = require('../database')

const readMetadataMovies = () => {
  const db = getConnection().get('movies').value()

  const movieDirs = movies.flatMap((path) => readdirSync(path).map(file => {
    const pathParent = join(path, file)
    const dbMovie = db.find(movie => movie.path === pathParent)

    if (typeof dbMovie !== 'undefined') return dbMovie

    if (!isDirectory({ path, file })) {
      if (!isMediaFile({ file })) return null

      return {
        path: pathParent,
        title: parse(file).name,
        sources: [
          {
            path: pathParent,
            subtitles: []
          }
        ]
      }
    }

    return {
      path: pathParent,
      title: file
    }
  })).filter(file => file !== null)

  const metadata = movieDirs.map(setMetadataMovies).filter(movies => movies !== null)
  writeFileSync(`${process.cwd()}/test.json`, JSON.stringify(metadata))
}

const setMetadataMovies = (movie) => {
  if (typeof movie.id !== 'undefined') return movie

  const metadata = {
    id: uuidv4(),
    path: movie.path,
    title: movie.title,
    genre: [],
    imdbRating: 0,
    synopsis: '',
    poster: '',
    images: [],
    sources: []
  }

  if (typeof movie.sources !== 'undefined') {
    metadata.sources = movie.sources
  } else {
    const sourcesDir = readdirSync(metadata.path)

    const sources = sourcesDir.flatMap(file => {
      if (!isDirectory({ path: metadata.path, file })) {
        if (!isMediaFile({ file })) return null

        const subtitles = getSubtitles({ dirs: sourcesDir, path: metadata.path })
        return {
          path: join(metadata.path, file),
          subtitles
        }
      }

      // When path is Directory
      const pathChild = join(metadata.path, file)
      const childrenDirs = readdirSync(pathChild)

      // Return all resources for child folders
      return childrenDirs.map((child) => {
        if (isDirectory({ path: pathChild, file: child })) return null
        if (!isMediaFile({ file: child })) return null

        const subtitles = getSubtitles({ dirs: childrenDirs, path: pathChild })
        return {
          path: join(pathChild, child),
          subtitles
        }
      })
    }).filter(source => source !== null)

    // Return null when no sources
    if (sources.length === 0) return null

    // Set new sources with subtitles
    metadata.sources = sources
  }

  return metadata
}

const getSubtitles = ({ dirs, path }) => {
  return dirs.map((file) => {
    if (!isSubtitleFile({ file })) return null
    return {
      src: join(path, file),
      srcLang: parse(file).name
    }
  }).filter(subtitle => subtitle !== null)
}

const isDirectory = ({ path, file }) => statSync(join(path, file)).isDirectory()
const isMediaFile = ({ file }) => (/\.(mp4|mkv|mov|avi|webm)$/gi).test(parse(file).ext)
const isSubtitleFile = ({ file }) => (/\.(vtt)$/gi).test(parse(file).ext)

module.exports = { readMetadataMovies }
