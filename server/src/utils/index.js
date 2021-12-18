const normalizeMovies = (movie) => {
  const { id, poster, gif, title, synopsis, subtitles } = movie
  const obj = { id, poster, gif, title, synopsis }

  if (subtitles !== '') return { ...obj, subtitles: true }
  return { ...obj, subtitles: false }
}

module.exports = { normalizeMovies }
