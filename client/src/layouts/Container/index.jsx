import styles from './styles.module.css'

const Container = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.children}>{children}</div>
    </div>
  )
}

const ContainerCenter = ({ children }) => {
  return (
    <div className={styles.wrapperCenter}>
      <div className={styles.childrenCenter}>{children}</div>
    </div>
  )
}

export { ContainerCenter }
export default Container
