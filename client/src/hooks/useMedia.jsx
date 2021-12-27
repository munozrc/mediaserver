import { useContext } from 'react'
import MediaContext from '../context/mediaContext'

export default function useMedia () {
  const { media } = useContext(MediaContext)

  return { media }
}
