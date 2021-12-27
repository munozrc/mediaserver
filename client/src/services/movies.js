const API_URL = import.meta.env.VITE_API_URL

const getMovies = async () => {
  return await window.fetch(`${API_URL}/movies`).then(async (response) => {
    const { movies, message } = await response.json()
    if (!response.ok) throw new Error(message)
    return movies
  })
}

const getSourceMovie = ({ id }) => `${API_URL}/movies/${id}`

const getSubtitlesMovie = async ({ id, source = 0 }) => {
  return await window.fetch(`${API_URL}/movies/subtitles?id=${id}&source=${source}`).then(async (response) => {
    const data = await response.json()
    if (!response.ok) throw new Error('bad request')
    return data
  })
}

export { getMovies, getSourceMovie, getSubtitlesMovie }
