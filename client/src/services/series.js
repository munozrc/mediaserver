const getSeries = () => {
  return window.fetch('/api/series')
    .then(response => response.json())
    .then(({ series }) => series)
    .catch((error) => {
      console.log({ error })
      return []
    })
}

export { getSeries }
