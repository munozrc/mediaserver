import { RiSkipForwardFill } from 'react-icons/ri'
import styles from './styles.module.css'

const DEFAULT_MESSAGE = 'Siguiente Episodio'

const ButtonSkip = ({ message = DEFAULT_MESSAGE, isVisible = false, handleClick }) => {
  return (
    <button
      className={styles.buttonSkip}
      style={{ visibility: isVisible ? 'none' : 'hidden' }}
      onClick={handleClick}
    >
      <RiSkipForwardFill size='1.4em' />{message}
    </button>
  )
}

export default ButtonSkip
