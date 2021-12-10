import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import useSingleMedia from '../../../../hooks/useSingleMedia'

const ContentDetail = () => {
  const { id } = useParams()
  const { activeMedia } = useSingleMedia({ id })

  if (activeMedia === null) return null
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperImage}>
        <img className={styles.image} src={activeMedia.gif} alt={`${id}-image`} />
      </div>
      <div className={styles.wrapperInfo}>
        <h1 className={styles.title}>{activeMedia.title}</h1>
      </div>
    </section>
  )
}

export default ContentDetail
