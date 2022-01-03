import { Link, NavLink } from 'react-router-dom'
import Button from '../../components/Button'
import styles from './styles.module.css'
import { RiMenuFill } from 'react-icons/ri'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link to='/'><h1 className={styles.logo}>MediaServer</h1></Link>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Movies</NavLink></li>
          <li className={styles.navItem}><NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/series'>Series</NavLink></li>
        </ul>
      </nav>
      <Button variant='flat' style={{ display: 'none' }}>
        <RiMenuFill size='2em' />
      </Button>
    </header>
  )
}

export default Header
