import ItemList from '../ItemList'
import styles from './styles.module.css'

const ListEpisodes = ({ episodes }) => {
  return (
    <ul className={styles.listEpisodesWrapper}>
      {episodes.map(({ id, title }) => (
        <ItemList key={`E${id}`}>
          {`E${id}: ${title}`}
        </ItemList>
      ))}
    </ul>
  )
}

export default ListEpisodes
