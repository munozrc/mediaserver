import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useMovie from '../../hooks/useMovie'
import Container from '../../layouts/Container'
import Header from '../../layouts/Header'
import { RiPlayFill } from 'react-icons/ri'

import styles from './styles.module.css'
import Button from '../../components/Button'
import VideoPlayer from '../../components/VideoPlayer'
import Separator from '../../layouts/Separator'

const MovieDetail = () => {
  const { id } = useParams()
  const { movie, source, subtitles } = useMovie({ id })
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)

  return (
    <Container>
      <Header />
      {movie && (
        <section className={styles.section}>
          <header className={styles.hero}>
            <img className={styles.heroImage} src={movie.images[0]} alt={`${id}-hero-image`} />
            <div className={styles.heroInfo}>
              <h1 className={styles.titleMedia}>{movie.title}</h1>
              <p className={styles.synopsis}>{movie.synopsis}</p>
              <div className={styles.buttons}>
                <Button onClick={() => setShowVideoPlayer(true)}><RiPlayFill size='28px' /></Button>
                <Button variant='outline'>Trailer</Button>
              </div>
            </div>
          </header>
        </section>
      )}
      {
        (movie && showVideoPlayer) && (
          <VideoPlayer
            source={{ title: movie.title, url: source }}
            subtitles={subtitles}
          />
        )
      }
      <Separator />
    </Container>
  )
}

export default MovieDetail
