import { createContext, useState } from 'react'

const MediaContext = createContext({})

export function MediaContextProvider ({ children }) {
  const [media, setMedia] = useState({ movies: [] })
  return (
    <MediaContext.Provider value={{ media, setMedia }}>
      {children}
    </MediaContext.Provider>
  )
}

export default MediaContext
