import { useContext, useEffect, useState } from 'react'
import MediaContext from '../context/mediaContext'

export default function useSerie ({ id }) {
  const { media } = useContext(MediaContext)
  const [activeSerie, setActiveSerie] = useState(null)

  useEffect(() => {
    const serie = media.series.find(serie => serie.id === id)
    if (typeof serie !== 'undefined') setActiveSerie(serie)
  }, [media, id])

  return {
    serie: activeSerie,
    source: `/api/series/${id}`,
    subtitles: {}
  }
}
