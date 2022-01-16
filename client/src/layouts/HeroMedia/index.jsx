import { RiCloseFill, RiPlayFill } from 'react-icons/ri'
import defaultImage from '../../assets/default-hero.png'
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import styles from './styles.module.css'

const HeroMedia = ({ image, title = '', synopsis = '', id = '', buttons = [] }) => {
  return (
    <section className={styles.section}>
      <header className={styles.hero}>
        <img className={styles.heroImage} src={image ?? defaultImage} alt={`${id}-hero-image`} />
        <div className={styles.heroInfo}>
          <header className={styles.heroHeader}>
            <LinkButton to='/'><RiCloseFill size='1.8em' /></LinkButton>
            <h1 className={styles.titleMedia}>{title}</h1>
          </header>
          <p className={styles.synopsis}>{synopsis}</p>
          <div className={styles.buttons}>
            {
              buttons.map((button, index) => (
                <Button key={index} {...button}>{button.children}</Button>
              ))
            }
          </div>
        </div>
      </header>
    </section>
  )
}

HeroMedia.IconPlay = <RiPlayFill size='28px' />

export default HeroMedia
