import { Link, useParams } from 'react-router-dom'
import { getSourceVideo, getSubtitlesVideo } from '../../services/movies'
import { RiCloseFill } from 'react-icons/ri' // Remix Icons
import VideoPlayer from '../VideoPlayer'
import useSingleMedia from '../../hooks/useSingleMedia'
import Modal from '../../layouts/Modal'
import styles from './styles.module.css'

const MovieDetail = () => {
  const { id } = useParams()
  const { activeMedia } = useSingleMedia({ id })

  if (activeMedia === null) return null
  return (
    <Modal>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.wrapperImage}>
            <img className={styles.image} src={activeMedia.gif} alt={`${id}-image`} />
          </div>
          <div className={styles.wrapperInfo}>
            <h1 className={styles.title}>{activeMedia.title}</h1>
          </div>
          <Link className={styles.btnClose} to='/'><RiCloseFill /></Link>
        </header>
        <footer className={styles.footer}>
          <div className={styles.videoPlayer}>
            <VideoPlayer
              source={getSourceVideo({ id })}
              subtitles={activeMedia.subtitles ? getSubtitlesVideo({ id }) : ''}
            />
          </div>
          <p className={styles.synopsis}>
            <strong className={styles.subtitle}>Sinopsis</strong>
            {activeMedia.synopsis}
          </p>
        </footer>
      </section>
    </Modal>
  )
}

export default MovieDetail
