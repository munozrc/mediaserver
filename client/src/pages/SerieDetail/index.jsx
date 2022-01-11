import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ListEpisodes from '../../components/ListEpisodes'
import VideoPlayer from '../../components/VideoPlayer'
import useSerie from '../../hooks/useSerie'
import Container, { ContainerCenter } from '../../layouts/Container'
import Header from '../../layouts/Header'
import HeroMedia from '../../layouts/HeroMedia'
import Separator from '../../layouts/Separator'

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

  if (serie && showVideoPlayer) {
    return (
      <ContainerCenter>
        <VideoPlayer
          source={{ title: `E${episode.id}: "${episode.title}"`, url: source.src }}
          subtitles={source.subtitles}
          handleClose={() => setShowVideoPlayer(false)}
        />
      </ContainerCenter>
    )
  }

  return (
    <Container>
      <Header />
      {serie && (
        <>
          <HeroMedia
            id={id}
            image={serie.images[0]}
            title={serie.title}
            synopsis={serie.synopsis}
            buttons={buttonsHeroMedia}
          />
          <ListEpisodes episodes={serie.episodes} />
        </>
      )}
      <Separator />
    </Container>
  )
}

export default SerieDetail
