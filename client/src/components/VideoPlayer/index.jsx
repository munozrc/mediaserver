import { useRef } from 'react'
import ReactPlayer from 'react-player'
import styles from './styles.module.css'

const VideoPlayer = ({ source, subtitles }) => {
  const videoRef = useRef(null)
  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        ref={videoRef}
        className={styles.videoPlayer}
        url={source}
        config={{
          attributes: {
            crossOrigin: 'true'
          },
          file: {
            tracks: [
              { kind: 'subtitles', src: subtitles, srcLang: 'es', default: true }
            ]
          }
        }}
        width='100%'
        height='100%'
        controls
      />
    </div>
  )
}

export default VideoPlayer
