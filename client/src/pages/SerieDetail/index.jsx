import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSerie from '../../hooks/useSerie'
import Container from '../../layouts/Container'
import Header from '../../layouts/Header'
import Separator from '../../layouts/Separator'
import HeroMedia from '../../layouts/HeroMedia'
import VideoPlayer from '../../components/VideoPlayer'

const SerieDetail = () => {
  const { id } = useParams()
  const { serie, episode, source } = useSerie({ id })
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)

  const buttonsHeroMedia = [
    {
      onClick: () => setShowVideoPlayer(true),
      children: HeroMedia.IconPlay
    },
    {
      variant: 'outline',
      children: 'Trailer'
    }
  ]

  return (
    <Container>
      <Header />
      {serie && (
        <HeroMedia
          id={id}
          image={serie.images[0]}
          title={serie.title}
          synopsis={serie.synopsis}
          buttons={buttonsHeroMedia}
        />
      )}
      {
        (serie && showVideoPlayer) && (
          <VideoPlayer
            source={{ title: episode.title, url: source.src }}
            handleClose={() => setShowVideoPlayer(false)}
            subtitles={source.subtitles}
          />
        )
      }
      <Separator />
    </Container>
  )
}

export default SerieDetail