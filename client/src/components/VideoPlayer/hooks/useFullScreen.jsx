import { useEffect, useRef } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const START_FULL_SCREEN = 'startFullScreenValue'
const DEFAULT_VALUE = true

export default function useFullScreen () {
  const screenFullscreen = useFullScreenHandle()
  const startFullScreen = useRef(JSON.parse(window.localStorage.getItem(START_FULL_SCREEN) || DEFAULT_VALUE))

  const toggleFullScreen = () => screenFullscreen.active ? screenFullscreen.exit() : screenFullscreen.enter()

  useEffect(() => {
    const { innerWidth, innerHeight, screen } = window
    const { orientation } = screen

    window.localStorage.setItem(START_FULL_SCREEN, JSON.stringify(startFullScreen.current))

    startFullScreen.current && screenFullscreen.enter()

    if (innerWidth <= 500 && innerHeight <= 767 && orientation.type === 'portrait-primary') {
      screen.orientation.lock('landscape-primary')
        .then(function () {
          console.log('change')
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }, [])

  return {
    screen: screenFullscreen,
    isStartFullScreen: startFullScreen.current,
    toggleFullScreen
  }
}

export { FullScreen as WrapperFullScreen }
