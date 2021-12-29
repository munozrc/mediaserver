import { useContext, useEffect, useState } from 'react'
import MediaContext from '../context/mediaContext'
import { getSourceMovie } from '../services/movies'

export default function useMovie ({ id }) {
  const { media } = useContext(MediaContext)
  const [activeMovie, setActiveMovie] = useState(null)
  const [activeSource] = useState(0)

  useEffect(() => {
    const movie = media.movies.find(movie => movie.id === id)
    if (typeof movie !== 'undefined') setActiveMovie(movie)
  }, [media, id])

  return {
    movie: activeMovie,
    source: getSourceMovie({ id }),
    subtitles: activeMovie?.sources[activeSource].subtitles
  }
}
