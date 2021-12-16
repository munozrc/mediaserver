const API_URL = import.meta.env.VITE_API_URL

const getMovies = async () => {
  return await window.fetch(`${API_URL}/movies`).then(async (response) => {
    const { movies, message } = await response.json()
    if (!response.ok) throw new Error(message)
    return movies
  })
}

const getSourceVideo = ({ id }) => `${API_URL}/movies/${id}`
const getSubtitlesVideo = ({ id }) => `${API_URL}/movies/subtitles/${id}`

export { getMovies, getSourceVideo, getSubtitlesVideo }
