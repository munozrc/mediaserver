import ReactPlayer from 'react-player'
import styles from './styles.module.css'

const VideoPlayer = ({ source }) => {
  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        className={styles.videoPlayer}
        url={source}
        width='100%'
        height='100%'
        controls
      />
    </div>
  )
}

export default VideoPlayer
