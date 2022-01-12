import ItemList from '../ItemList'
import styles from './styles.module.css'

const ListEpisodes = ({ episodes, onChangeEpisode }) => {
  return (
    <ul className={styles.listEpisodesWrapper}>
      {episodes.map(({ id, title }) => (
        <ItemList key={`E${id}`} onClick={() => onChangeEpisode({ id })}>
          <strong>E{id}</strong>{' ' + title}
        </ItemList>
      ))}
    </ul>
  )
}

export default ListEpisodes
