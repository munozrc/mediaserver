function getProgressInPixels ({ currentTime, duration }) {
  const progress = (currentTime / duration) * 100
  return `${progress}%`
}

export { getProgressInPixels }
