import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const LinkButton = ({ children, variant = 'flat', ...props }) => {
  return (
    <Link
      className={`${styles.btn} ${styles[variant]}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default LinkButton
