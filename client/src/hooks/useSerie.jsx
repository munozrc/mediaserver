import { useContext, useEffect, useState } from 'react'
import MediaContext from '../context/mediaContext'

export default function useSerie ({ id, initEpisode = 0 }) {
  const { media } = useContext(MediaContext)
  const [activeSerie, setActiveSerie] = useState(null)
  const [activeEpsiode, setActiveEpisode] = useState(null)

  useEffect(() => {
    const serie = media.series.find(serie => serie.id === id)
    if (typeof serie === 'undefined') return

    const episode = serie.episodes.map(episode => episode.id === initEpisode)
    if (typeof episode !== 'undefined') setActiveEpisode(episode)

    setActiveSerie(serie)
  }, [media, id])

  return {
    serie: activeSerie,
    source: `/api/series/media?serie=${id}&epsiode=${activeEpsiode?.id}`
  }
}
