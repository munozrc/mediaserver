const normalizeMovies = (movie) => {
  const { sources } = movie
  const newSources = sources.map(normalizeSources)

  return { ...movie, sources: newSources }
}

const normalizeSources = (source, index) => {
  const { subtitles } = source
  const newSubtitles = subtitles.map(normalizeSubtitles)

  return { id: index, subtitles: newSubtitles }
}

const normalizeSubtitles = (subtitle) => {
  const { srcLang } = subtitle
  return srcLang
}

module.exports = { normalizeMovies }
