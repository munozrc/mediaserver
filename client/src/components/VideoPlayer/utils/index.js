function getProgressInPixels ({ currentTime, duration }) {
  const progress = (currentTime / duration) * 100
  return `${progress}%`
}

function secondsToTime ({ currentTime, duration }) {
  const seconds = getTimeRemaining({ currentTime, duration })
  return new Date(seconds * 1000).toISOString().slice(11, 19)
}

function getTimeRemaining ({ currentTime, duration }) {
  return duration - currentTime
}

export { getProgressInPixels, secondsToTime, getTimeRemaining }
