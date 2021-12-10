import { useContext, useEffect, useState } from 'react'
import MediaContext from '../context/mediaContext'

export default function useSingleMedia ({ id }) {
  const { media } = useContext(MediaContext)
  const [activeMedia, setActiveMedia] = useState(null)

  useEffect(() => {
    const find = media.movies.find(ele => ele.id === id)
    setActiveMedia(typeof find !== 'undefined' ? find : null)
  }, [media, id])

  return { activeMedia }
}
