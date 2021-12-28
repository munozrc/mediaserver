import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import SliderSeek from './components/SliderSeek'
import styles from './styles.module.css'

const VideoPlayer = ({ source, subtitles = {} }) => {
  const videoRef = useRef(null)
  const [values, setValues] = useState({ loaded: 0, played: 0, duration: 0, volume: 0.5 })
  const [isPlaying, setPlaying] = useState(false)
  const [counter, setCounter] = useState(0)

  const handleProgress = ({ loadedSeconds, playedSeconds }) => {
    setValues(prev => ({ ...prev, loaded: loadedSeconds, played: playedSeconds }))
    setCounter(prev => prev + 1)
  }

  const handleDurationVideo = (duration) => { setValues(prev => ({ ...prev, duration })) }

  const handleChangeSeek = (value) => { videoRef.current?.seekTo(value, 'seconds') }

  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        ref={videoRef}
        width='100%'
        height='100%'
        className={styles.videoPlayer}
        url={source}
        playing={isPlaying}
        volume={values.volume}
        onProgress={handleProgress}
        onDuration={handleDurationVideo}
        onPause={() => setPlaying(false)}
        config={{
          attributes: { crossOrigin: 'true' },
          file: { tracks: [...subtitles] }
        }}
      />
      <section>
        <SliderSeek currentTime={values.played} duration={values.duration} onChangeSeek={handleChangeSeek} />
      </section>
    </div>
  )
}

export default VideoPlayer
