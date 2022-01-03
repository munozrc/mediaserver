const normalizeMovie = (movie) => {
  const { id, sources } = movie
  const newSources = sources.map((source, index) => {
    const subtitles = source.subtitles.map((subtitle) => {
      return {
        ...subtitle,
        kind: 'subtitles',
        src: `/api/movies/subtitle?id=${id}&source=${index}&lang=${subtitle.srcLang}`
      }
    })

    return { id: index, subtitles }
  })

  return { ...movie, sources: newSources }
}

export { normalizeMovie }
