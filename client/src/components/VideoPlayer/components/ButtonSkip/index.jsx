import { RiSkipForwardFill } from 'react-icons/ri'
import { getTimeRemaining } from '../../utils'
import styles from './styles.module.css'

const SECONDS_FOR_SHOW = 300

const ButtonSkip = ({ currentTime = 0, duration = 0, handleClick }) => {
  const time = getTimeRemaining({ currentTime, duration })
  return (
    <button
      className={styles.buttonSkip}
      style={{ visibility: (time > SECONDS_FOR_SHOW) ? 'hidden' : '' }}
      onClick={handleClick}
    >
      <RiSkipForwardFill size='1.4em' />Siguiente Episodio
    </button>
  )
}

export default ButtonSkip
