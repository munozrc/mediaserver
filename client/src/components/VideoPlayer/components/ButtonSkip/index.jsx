import { RiSkipForwardFill } from 'react-icons/ri'
import styles from './styles.module.css'

const ButtonSkip = ({ isVisible = false, handleClick = () => {} }) => {
  return (
    <button
      className={styles.buttonSkip}
      style={{ visibility: isVisible ? 'none' : 'hidden' }}
      onClick={handleClick}
    >
      <RiSkipForwardFill size='1.4em' />Siguiente Episodio
    </button>
  )
}

export default ButtonSkip
