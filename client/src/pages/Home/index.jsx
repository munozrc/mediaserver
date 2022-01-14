import MediaCard from '../../components/MediaCard'
import useMedia from '../../hooks/useMedia'
import Container from '../../layouts/Container'
import GridContainer from '../../layouts/GridContainer'
import Header from '../../layouts/Header'

const Home = () => {
  const { movies, series } = useMedia()
  return (
    <Container>
      <Header />
      <GridContainer>
        {
          movies.slice(0, 6).map(movie => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              image={movie.poster}
              title={movie.title}
            />
          ))
        }
        {
          series.slice(0, 6).map(serie => (
            <MediaCard
              key={serie.id}
              id={serie.id}
              image={serie.poster}
              title={serie.title}
              type='series'
            />
          ))
        }
      </GridContainer>
    </Container>
  )
}

export default Home
