import ReactPlayer from 'react-player'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import SliderSeek from './components/SliderSeek'
import { RiPlayFill, RiPauseCircleFill, RiArrowLeftLine, RiFullscreenFill } from 'react-icons/ri'
import styles from './styles.module.css'
import ButtonFlat from './components/ButtonFlat'
import useControls from './hooks/useControls'

const VideoPlayer = ({ source, subtitles = {}, startFullScreen = true }) => {
  const screen = useFullScreenHandle()
  const controls = useControls()
  const { volume, played, duration } = controls.values
  const { title, url } = source

  const handleFullScreen = () => screen.active ? screen.exit() : screen.enter()

  return (
    <FullScreen handle={screen}>
      <div className={styles.wrapper} onMouseMove={controls.handleResetCounter}>
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
        <section className={styles.wrapperControls} style={{ opacity: `${controls.counterFocus <= 1 ? '1' : '0'}` }}>
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
