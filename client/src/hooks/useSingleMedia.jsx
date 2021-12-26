import { useEffect, useState } from 'react'
import useMedia from './useMedia'

export default function useSingleMedia ({ id }) {
  const { media } = useMedia()
  const [activeMedia, setActiveMedia] = useState(null)

  useEffect(() => {
    const find = media.movies.find(ele => ele.id === id)
    setActiveMedia(typeof find !== 'undefined' ? find : null)
  }, [media, id])

  return { activeMedia }
}
