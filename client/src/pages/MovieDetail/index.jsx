import { useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoPlayer from '../../components/VideoPlayer'
import useMovie from '../../hooks/useMovie'
import Container, { ContainerCenter } from '../../layouts/Container'
import Header from '../../layouts/Header'
import HeroMedia from '../../layouts/HeroMedia'
import Separator from '../../layouts/Separator'

const MovieDetail = () => {
  const { id } = useParams()
  const { movie, source, subtitles } = useMovie({ id })
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

  if (movie && showVideoPlayer) {
    return (
      <ContainerCenter>
        <VideoPlayer
          source={{ title: movie.title, url: source }}
          subtitles={subtitles}
          handleClose={() => setShowVideoPlayer(false)}
        />
      </ContainerCenter>
    )
  }

  return (
    <Container>
      <Header />
      {movie && (
        <HeroMedia
          id={id}
          image={movie.images[0]}
          title={movie.title}
          synopsis={movie.synopsis}
          buttons={buttonsHeroMedia}
        />
      )}
      <Separator />
    </Container>
  )
}

export default MovieDetail
