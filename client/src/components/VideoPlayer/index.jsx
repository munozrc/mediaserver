import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import SliderSeek from './components/SliderSeek'
import { RiPlayFill, RiPauseCircleFill, RiArrowLeftLine, RiFullscreenFill } from 'react-icons/ri'
import styles from './styles.module.css'
import ButtonFlat from './components/ButtonFlat'

const VideoPlayer = ({ source, subtitles = {} }) => {
  const screen = useFullScreenHandle()
  const videoRef = useRef(null)
  const [values, setValues] = useState({ loaded: 0, played: 0, duration: 0, volume: 0.5 })
  const [isPlaying, setPlaying] = useState(false)
  const [counter, setCounter] = useState(0)

  const handleFullScreen = () => {
    if (screen.active) screen.exit().then(() => {}).catch(err => console.error(err))
    else screen.enter().then(() => {}).catch(err => console.error(err))
  }

  const handleProgress = ({ loadedSeconds, playedSeconds }) => {
    setValues(prev => ({ ...prev, loaded: loadedSeconds, played: playedSeconds }))
    setCounter(prev => prev + 1)
  }

  const handleDurationVideo = (duration) => { setValues(prev => ({ ...prev, duration })) }

  const handleChangeSeek = (value) => { videoRef.current?.seekTo(value, 'seconds') }

  const handlePause = () => {
    setPlaying(false)
    setCounter(0)
  }

  return (
    <FullScreen handle={screen}>
      <div className={styles.wrapper} onMouseMove={() => setCounter(0)}>
        <ReactPlayer
          ref={videoRef}
          width='100%'
          height='100%'
          className={styles.videoPlayer}
          url={source.url}
          playing={isPlaying}
          volume={values.volume}
          onProgress={handleProgress}
          onDuration={handleDurationVideo}
          onPause={handlePause}
          config={{
            attributes: { crossOrigin: 'true' },
            file: { tracks: [...subtitles] }
          }}
        />
        <section className={styles.wrapperControls} style={{ opacity: `${counter <= 3 ? '1' : '0'}` }}>
          <header className={styles.header}>
            <ButtonFlat><RiArrowLeftLine /></ButtonFlat>
            <h3 className={styles.titleSource}>{source.title}</h3>
            <ButtonFlat><RiFullscreenFill size='0.8em' onClick={handleFullScreen} /></ButtonFlat>
          </header>
          <div className={styles.wrapperButtons}>
            <ButtonFlat size='large' onClick={() => setPlaying(prev => !prev)}>
              {isPlaying ? <RiPauseCircleFill /> : <RiPlayFill />}
            </ButtonFlat>
          </div>
          <footer>
            <SliderSeek currentTime={values.played} duration={values.duration} onChangeSeek={handleChangeSeek} />
          </footer>
        </section>
      </div>
    </FullScreen>
  )
}

export default VideoPlayer
