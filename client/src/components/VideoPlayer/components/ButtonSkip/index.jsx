import { RiSkipForwardFill } from 'react-icons/ri'
import { getTimeRemaining } from '../../utils'
import styles from './styles.module.css'

const SECONDS_FOR_SHOW = 300

const ButtonSkip = ({ currentTime, duration, handleClick }) => {
  const time = getTimeRemaining({ currentTime, duration })
  return (
    <button
      className={styles.buttonSkip}
      style={{ visibility: (duration === 0 || time > SECONDS_FOR_SHOW) ? 'hidden' : 'visible' }}
      onClick={handleClick}
    >
      <RiSkipForwardFill size='1.4em' />Siguiente Episodio
    </button>
  )
}

export default ButtonSkip
