import styles from './styles.module.css'

const ItemList = ({ children, ...props }) => {
  return (
    <li className={styles.itemListWrapper} {...props}>
      <span>{children}</span>
    </li>
  )
}

export default ItemList
