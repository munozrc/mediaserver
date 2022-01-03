import { createContext, useEffect, useState } from 'react'
import { getMovies } from '../services/movies'
import { getSeries } from '../services/series'

const MediaContext = createContext({})

export function MediaContextProvider ({ children }) {
  const [media, setMedia] = useState({ series: [], movies: [] })

  useEffect(() => {
    Promise.all([
      getMovies(),
      getSeries()
    ]).then(([movies, series]) => {
      setMedia({ series, movies })
    }).catch(error => new Error(error))
  }, [])

  return (
    <MediaContext.Provider value={{ media, setMedia }}>
      {children}
    </MediaContext.Provider>
  )
}

export default MediaContext
