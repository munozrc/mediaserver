import { RiPlayFill } from 'react-icons/ri' // Remix Icons
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const MediaCard = ({ type = 'movies', title, image, id }) => {
  return (
    <Link className={styles.wrapper} to={`/${type}/${id}`}>
      <div className={styles.wrapperImage}>
        <object className={styles.image} data={image}>
          <span className={styles.title}>{title}</span>
        </object>
        <RiPlayFill className={styles.play} color='#fafafa' size='5em' />
      </div>
    </Link>
  )
}

export default MediaCard
