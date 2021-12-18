const normalizeMovies = (movie) => {
  const { id, poster, gif, title, synopsis } = movie
  return { id, poster, gif, title, synopsis }
}

module.exports = { normalizeMovies }
