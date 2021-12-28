import styles from './styles.module.css'

const ButtonFlat = ({ children, size = 'small', ...props }) => {
  return (
    <button
      className={`${styles.btn} ${styles[size]}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonFlat
