import { useParams } from 'react-router-dom'
import useSingleMedia from '../../hooks/useSingleMedia'
import Container from '../../layouts/Container'
import Header from '../../layouts/Header'
import { RiPlayMiniFill } from 'react-icons/ri'

import styles from './styles.module.css'

const MovieDetail = () => {
  const { id } = useParams()
  const { activeMedia } = useSingleMedia({ id })

  return (
    <Container>
      <Header />
      {activeMedia && (
        <section className={styles.section}>
          <header className={styles.hero}>
            <img className={styles.heroImage} src={activeMedia.images[0]} alt={`${id}-hero-image`} />
            <div className={styles.heroInfo}>
              <h1 className={styles.titleMedia}>{activeMedia.title}</h1>
              <p className={styles.synopsis}>{activeMedia.synopsis}</p>
              <div className={styles.buttons}>
                <button className={styles.btn}>Reproducir <RiPlayMiniFill /></button>
              </div>
            </div>
          </header>
        </section>
      )}
    </Container>
  )
}

export default MovieDetail
