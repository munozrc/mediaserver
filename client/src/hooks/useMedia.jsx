import { useEffect, useState } from 'react'
import { getMovies } from '../services/movies'

export default function useMedia () {
  const [media, setMedia] = useState({ movies: [] })

  useEffect(() => {
    getMovies().then((movies) => setMedia(prev => ({ ...prev, movies })))
  }, [])

  return { media }
}
