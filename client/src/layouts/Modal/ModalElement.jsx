import styles from './styles.module.css'

const ModalElement = ({ children }) => {
  return (<div className={styles.wrapper}>{children}</div>)
}

export default ModalElement
