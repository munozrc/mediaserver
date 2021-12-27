import { createContext, useEffect, useState } from 'react'
import { getMovies } from '../services/movies'

const MediaContext = createContext({})

export function MediaContextProvider ({ children }) {
  const [media, setMedia] = useState({ series: [], movies: [] })

  useEffect(() => {
    getMovies().then((movies) => setMedia(prev => ({ ...prev, movies })))
  }, [])

  return (
    <MediaContext.Provider value={{ media, setMedia }}>
      {children}
    </MediaContext.Provider>
  )
}

export default MediaContext
