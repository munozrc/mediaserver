const getMovies = () => {
  return window.fetch('/api/movies')
    .then(response => response.json())
    .then(({ movies }) => movies)
    .catch((error) => {
      console.log({ error })
      return []
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
