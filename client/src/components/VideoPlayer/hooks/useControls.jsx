import { useRef, useState } from 'react'

export default function useControls () {
  const ref = useRef(null)
  const [values, setValues] = useState({ loaded: 0, played: 0, duration: 0, volume: 0.5 })
  const [isPlaying, setPlaying] = useState(false)
  const [counterFocus, setCounterFocus] = useState(0)

  const handleDurationVideo = (duration) => setValues(prev => ({ ...prev, duration }))

  const handleChangeSeek = (value) => ref.current?.seekTo(value, 'seconds')

  const handleResetCounter = () => setCounterFocus(0)

  const handlePlay = () => setPlaying(prev => !prev)

  const handleProgress = ({ loadedSeconds, playedSeconds }) => {
    setValues(prev => ({ ...prev, loaded: loadedSeconds, played: playedSeconds }))
    setCounterFocus(prev => prev + 1)
  }

  const handlePause = () => {
    setPlaying(false)
    handleResetCounter()
  }

  return {
    ref,
    values,
    isPlaying,
    counterFocus,
    handlePlay,
    handleResetCounter,
    handleDurationVideo,
    handleChangeSeek,
    handleProgress,
    handlePause
  }
}
