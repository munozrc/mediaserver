import { Link } from 'react-router-dom'
import { RiPlayFill } from 'react-icons/ri' // Remix Icons
import styles from './styles.module.css'

const Card = ({ title, image, id }) => {
  return (
    <Link className={styles.wrapper} to={`/detail/${id}`}>
      <div className={styles.wrapperImage}>
        <img className={styles.image} src={image} alt={title} />
        <RiPlayFill className={styles.play} color='#fafafa' size='5em' />
      </div>
    </Link>
  )
}

export default Card
