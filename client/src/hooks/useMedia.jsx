import { useContext, useEffect } from 'react'
import MediaContext from '../context/mediaContext'
import { getMovies } from '../services/movies'

export default function useMedia () {
  const { media, setMedia } = useContext(MediaContext)

  useEffect(() => {
    getMovies().then((movies) => setMedia(prev => ({ ...prev, movies })))
  }, [])

  return { media }
}
