import { Link } from 'react-router-dom'
import { RiPlayFill } from 'react-icons/ri' // Remix Icons
import styles from './styles.module.css'

const Card = ({ title, image, id, mediaType = 'movies' }) => {
  return (
    <Link className={styles.wrapper} to={`/${mediaType}/${id}`}>
      <div className={styles.wrapperImage}>
        <img className={styles.image} src={image} alt={title} />
        <RiPlayFill className={styles.play} color='#fafafa' size='5em' />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  )
}

export default Card
