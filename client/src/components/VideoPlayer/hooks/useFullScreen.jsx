import { useEffect, useRef } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const START_FULL_SCREEN = 'startFullScreenValue'
const DEFAULT_VALUE = true

export default function useFullScreen () {
  const screen = useFullScreenHandle()
  const startFullScreen = useRef(JSON.parse(window.localStorage.getItem(START_FULL_SCREEN) || DEFAULT_VALUE))

  const toggleFullScreen = () => screen.active ? screen.exit() : screen.enter()

  useEffect(() => {
    window.localStorage.setItem(START_FULL_SCREEN, JSON.stringify(startFullScreen.current))
    startFullScreen.current && screen.enter()
  }, [])

  return {
    screen,
    isStartFullScreen: startFullScreen.current,
    toggleFullScreen
  }
}

export { FullScreen as WrapperFullScreen }
