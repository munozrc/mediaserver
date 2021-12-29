function getProgressInPixels ({ currentTime, duration }) {
  const progress = (currentTime / duration) * 100
  return `${progress}%`
}

function secondsToTime ({ currentTime, duration }) {
  const seconds = duration - currentTime
  return new Date(seconds * 1000).toISOString().slice(11, 19)
}

export { getProgressInPixels, secondsToTime }
