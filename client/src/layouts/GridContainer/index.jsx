import styles from './styles.module.css'

const GridContainer = ({ children }) => {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default GridContainer
