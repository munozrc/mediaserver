import styles from './styles.module.css'

const Container = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.children}>{children}</div>
    </div>
  )
}

export default Container
