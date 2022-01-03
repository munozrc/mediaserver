import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useMovie from '../../hooks/useMovie'
import Container from '../../layouts/Container'
import Header from '../../layouts/Header'
import Separator from '../../layouts/Separator'
import HeroMedia from '../../layouts/HeroMedia'
import VideoPlayer from '../../components/VideoPlayer'

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
      {
        (movie && showVideoPlayer) && (
          <VideoPlayer
            source={{ title: movie.title, url: source }}
            subtitles={subtitles}
            handleClose={() => setShowVideoPlayer(false)}
          />
        )
      }
      <Separator />
    </Container>
  )
}

export default MovieDetail
