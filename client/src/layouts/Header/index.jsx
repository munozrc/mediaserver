import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link to='/'><h1 className={styles.logo}>MediaServer</h1></Link>
    </header>
  )
}

export default Header
