import { Link, NavLink } from 'react-router-dom'
import { RiMenuFill } from 'react-icons/ri'
import Button from '../../components/Button'
import styles from './styles.module.css'

const CustomNavLink = ({ children, ...props }) => (
  <li className={styles.navItem}>
    <NavLink className={({ isActive }) => isActive ? styles.active : ''} {...props}>
      {children}
    </NavLink>
  </li>
)

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link to='/'><h1 className={styles.logo}>MediaServer</h1></Link>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <CustomNavLink to='/'>Home</CustomNavLink>
          <CustomNavLink to='/movies'>Movies</CustomNavLink>
          <CustomNavLink to='/series'>Series</CustomNavLink>
        </ul>
      </nav>
      <Button variant='flat' style={{ display: 'none' }}>
        <RiMenuFill size='2em' />
      </Button>
    </header>
  )
}

export default Header
