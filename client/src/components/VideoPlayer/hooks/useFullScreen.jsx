import { useEffect } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const START_FULL_SCREEN = 'startFullScreenValue'
const DEFAULT_VALUE = true

export default function useFullScreen () {
  const screen = useFullScreenHandle()

  const toggleFullScreen = () => screen.active ? screen.exit() : screen.enter()

  useEffect(() => {
    const startFullScreen = JSON.parse(window.localStorage.getItem(START_FULL_SCREEN) || DEFAULT_VALUE)
    window.localStorage.setItem(START_FULL_SCREEN, JSON.stringify(startFullScreen))
    startFullScreen && screen.enter()
  }, [])

  return { screen, toggleFullScreen }
}

export { FullScreen as WrapperFullScreen }
