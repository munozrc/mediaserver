import { useRef, useState } from 'react'

export default function useControls () {
  const ref = useRef(null)
  const [values, setValues] = useState({ loaded: 0, played: 0, duration: 0, volume: 1, subtitles: -1 })
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

  const handleSubtitles = (value = -1) => {
    console.log({ value })
    const tracks = ref.current.wrapper.children[0].textTracks
    for (let i = 0; i < tracks.length; i++) {
      if (i === value) tracks[i].mode = 'showing'
      else tracks[i].mode = 'hidden'
    }
    setValues((prev) => ({ ...prev, subtitles: value }))
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
    handlePause,
    handleSubtitles
  }
}
