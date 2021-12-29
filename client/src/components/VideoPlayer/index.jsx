import ReactPlayer from 'react-player'
import useControls from './hooks/useControls'
import useFullScreen, { WrapperFullScreen } from './hooks/useFullScreen'
import { RiPlayFill, RiPauseCircleFill, RiArrowLeftLine, RiFullscreenFill } from 'react-icons/ri'
import SliderSeek from './components/SliderSeek'
import ButtonFlat from './components/ButtonFlat'
import styles from './styles.module.css'

const hideCursor = ({ counterFocus }) => counterFocus <= 1 ? '' : styles.hideCursor
const hideControls = ({ counterFocus }) => counterFocus <= 1 ? '' : styles.hideControls

const VideoPlayer = ({ source, subtitles = {}, handleClose = () => {} }) => {
  const { screen, toggleFullScreen } = useFullScreen()
  const controls = useControls()

  return (
    <WrapperFullScreen handle={screen}>
      <div
        className={`${styles.wrapper} ${hideCursor(controls)}`}
        onMouseMove={controls.handleResetCounter}
      >
        <ReactPlayer
          ref={controls.ref}
          width='100%'
          height='100%'
          className={styles.videoPlayer}
          url={source.url}
          playing={controls.isPlaying}
          volume={controls.values.volume}
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
            <ButtonFlat><RiArrowLeftLine onClick={handleClose} /></ButtonFlat>
            <h3 className={styles.titleSource}>{source.title}</h3>
            <ButtonFlat><RiFullscreenFill size='0.8em' onClick={toggleFullScreen} /></ButtonFlat>
          </header>
          <div className={styles.wrapperButtons}>
            <ButtonFlat size='large' onClick={controls.handlePlay}>
              {controls.isPlaying ? <RiPauseCircleFill /> : <RiPlayFill />}
            </ButtonFlat>
          </div>
          <footer>
            <SliderSeek
              currentTime={controls.values.played}
              duration={controls.values.duration}
              onChangeSeek={controls.handleChangeSeek}
            />
          </footer>
        </section>
      </div>
    </WrapperFullScreen>
  )
}

export default VideoPlayer
