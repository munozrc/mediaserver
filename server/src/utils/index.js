const normalizeMovie = (movie) => {
  const { id, sources } = movie
  const newSources = sources.map((source, index) => {
    const src = `/api/movies/media?movie=${id}&source=${index}`
    const subtitles = source.subtitles.map((subtitle) => ({
      ...subtitle,
      kind: 'subtitles',
      src: `/api/movies/subtitle?id=${id}&source=${index}&lang=${subtitle.srcLang}`
    }))

    return { src, subtitles }
  })

  return { ...movie, sources: newSources }
}

const normalizeSerie = (serie) => {
  const { id, episodes: listEpisodes } = serie
  const episodes = listEpisodes.map((episode) => {
    const { id: idEpisode, sources: listSources } = episode
    const sources = listSources.map((source, index) => {
      const { subtitles: listSubtitles } = source
      const src = `/api/series/media?serie=${id}&episode=${idEpisode}&source=${index}`

      const subtitles = listSubtitles.map((subtitle) => ({
        ...subtitle,
        kind: 'subtitles',
        src: `/api/series/subtitle?serie=${id}&episode=${idEpisode}&source=${index}&lang=${subtitle.srcLang}`
      }))

      return { src, subtitles }
    })

    return { ...episode, sources }
  })

  return { ...serie, episodes }
}

export { normalizeMovie, normalizeSerie }
