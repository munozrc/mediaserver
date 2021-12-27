import { useContext, useEffect, useState } from 'react'
import MediaContext from '../context/mediaContext'
import { getSubtitlesMovie, getSourceMovie } from '../services/movies'

export default function useSingleMedia ({ id }) {
  const { media } = useContext(MediaContext)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const movie = media.movies.find(movie => movie.id === id)
    if (typeof movie === 'undefined') return

    getSubtitlesMovie({ id })
      .then((subtitles) => setMovie(() => ({ ...movie, subtitles })))
      .catch(error => console.error(error))
  }, [media, id])

  return {
    movie,
    source: getSourceMovie({ id })
  }
}
