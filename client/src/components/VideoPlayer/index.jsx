import { RiCloseFill, RiFullscreenFill, RiPauseCircleFill, RiPlayFill } from 'react-icons/ri'
import ReactPlayer from 'react-player'
import ButtonFlat from './components/ButtonFlat'
import ButtonSkip from './components/ButtonSkip'
import SliderSeek from './components/SliderSeek'
import useControls from './hooks/useControls'
import useFullScreen, { WrapperFullScreen } from './hooks/useFullScreen'
import styles from './styles.module.css'

const hideCursor = ({ counterFocus }) => counterFocus <= 1 ? '' : styles.hideCursor
const hideControls = ({ counterFocus }) => counterFocus <= 1 ? '' : styles.hideControls
const isFullScreenActive = ({ active }) => active ? styles.fullscreen : ''

const VideoPlayer = ({ source, subtitles, handleClose, handleSkipEpisode }) => {
  const { screen, isStartFullScreen, toggleFullScreen } = useFullScreen()
  const controls = useControls()

  return (
    <WrapperFullScreen handle={screen}>
      <div
        className={`${styles.wrapper} ${isFullScreenActive(screen)} ${hideCursor(controls)}`}
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
            file: { tracks: subtitles }
          }}
        />
        <section className={`${styles.wrapperControls} ${hideControls(controls)}`}>
          <header className={styles.header}>
            <h3 className={styles.titleSource}>{source.title}</h3>
            <div className={styles.wrapperButtonsPlayer}>
              {!isStartFullScreen && (
                <ButtonFlat>
                  <RiFullscreenFill size='0.7em' onClick={toggleFullScreen} />
                </ButtonFlat>
              )}
              <ButtonFlat>
                <RiCloseFill onClick={handleClose} />
              </ButtonFlat>
            </div>
          </header>
          <div className={styles.wrapperButtons}>
            <ButtonFlat size='large' onClick={controls.handlePlay}>
              {controls.isPlaying ? <RiPauseCircleFill /> : <RiPlayFill />}
            </ButtonFlat>
          </div>
          <footer className={styles.footerControls}>
            <div className={styles.extraControls}>
              {typeof handleSkipEpisode === 'function' && (
                <ButtonSkip
                  handleClick={handleSkipEpisode}
                  currentTime={controls.values.played}
                  duration={controls.values.duration}
                />
              )}
            </div>
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
