import { useContext, useEffect, useState } from 'react'
import MediaContext from '../context/mediaContext'

export default function useSerie ({ id, initEpisode = 1 }) {
  const { media } = useContext(MediaContext)
  const [activeSerie, setActiveSerie] = useState(null)
  const [activeEpsiode, setActiveEpisode] = useState(null)
  const [activeSource] = useState(0)

  useEffect(() => {
    const serie = media.series.find(serie => serie.id === id)
    if (typeof serie === 'undefined') return

    const episode = serie.episodes.find(episode => episode.id === initEpisode)
    if (typeof episode !== 'undefined') setActiveEpisode(episode)

    setActiveSerie(serie)
  }, [media, id])

  return {
    serie: activeSerie,
    episode: activeEpsiode,
    source: activeEpsiode?.sources[activeSource]
  }
}
