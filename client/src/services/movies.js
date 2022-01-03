const getMovies = async () => {
  return await window.fetch('/api/movies').then(async (response) => {
    const { movies, message } = await response.json()
    if (!response.ok) throw new Error(message)
    return movies
  })
}

const getSubtitlesMovie = async ({ id, source = 0 }) => {
  return await window.fetch(`/api/movies/subtitles?id=${id}&source=${source}`).then(async (response) => {
    const data = await response.json()
    if (!response.ok) throw new Error('bad request')
    return data
  })
}

export { getMovies, getSubtitlesMovie }
