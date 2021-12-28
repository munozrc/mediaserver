import ReactPlayer from 'react-player'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { RiPlayFill, RiPauseCircleFill, RiArrowLeftLine, RiFullscreenFill } from 'react-icons/ri'
import SliderSeek from './components/SliderSeek'
import ButtonFlat from './components/ButtonFlat'
import useControls from './hooks/useControls'
import styles from './styles.module.css'

const hideCursor = ({ counterFocus }) => counterFocus <= 1 ? '' : styles.hideCursor
const hideControls = ({ counterFocus }) => counterFocus <= 1 ? '' : styles.hideControls

const VideoPlayer = ({ source, subtitles = {}, startFullScreen = true }) => {
  const screen = useFullScreenHandle()
  const controls = useControls()
  const { volume, played, duration } = controls.values
  const { title, url } = source

  const handleFullScreen = () => screen.active ? screen.exit() : screen.enter()

  return (
    <FullScreen handle={screen}>
      <div className={`${styles.wrapper} ${hideCursor(controls)}`} onMouseMove={controls.handleResetCounter}>
        <ReactPlayer
          ref={controls.ref}
          width='100%'
          height='100%'
          className={styles.videoPlayer}
          url={url}
          playing={controls.isPlaying}
          volume={volume}
          onProgress={controls.handleProgress}
          onDuration={controls.handleDurationVideo}
          onPause={controls.handlePause}
          config={{
            attributes: { crossOrigin: 'true' },
            file: { tracks: [...subtitles] }
          }}
        />
        <section className={`${styles.wrapperControls} ${hideControls(controls)}`}>
          <header className={styles.header}>
            <ButtonFlat><RiArrowLeftLine /></ButtonFlat>
            <h3 className={styles.titleSource}>{title}</h3>
            <ButtonFlat><RiFullscreenFill size='0.8em' onClick={handleFullScreen} /></ButtonFlat>
          </header>
          <div className={styles.wrapperButtons}>
            <ButtonFlat size='large' onClick={controls.handlePlay}>
              {controls.isPlaying ? <RiPauseCircleFill /> : <RiPlayFill />}
            </ButtonFlat>
          </div>
          <footer>
            <SliderSeek currentTime={played} duration={duration} onChangeSeek={controls.handleChangeSeek} />
          </footer>
        </section>
      </div>
    </FullScreen>
  )
}

export default VideoPlayer
