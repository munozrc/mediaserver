import React, { useRef } from 'react'
import { getProgressInPixels, secondsToTime } from '../../utils'
import styles from './styles.module.css'

const SliderSeek = ({ currentTime, duration, onChangeSeek }) => {
  const seekRef = useRef(null)

  const handleOnMouse = (event) => {
    if (seekRef.current === null) return
    const sr = seekRef.current
    const normalizePageX = event.pageX - sr.getBoundingClientRect().left
    const seek = ((normalizePageX - sr.offsetLeft) / sr.offsetWidth) * duration
    onChangeSeek(seek)
  }

  return (
    <div className={styles.wrapper}>
      <div ref={seekRef} className={styles.seek} onClick={handleOnMouse}>
        <div className={styles.track} style={{ width: getProgressInPixels({ currentTime, duration }) }} />
      </div>
      <span className={styles.time}>{secondsToTime({ currentTime, duration })}</span>
    </div>
  )
}

export default SliderSeek
