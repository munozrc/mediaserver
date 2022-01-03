import useMedia from '../../hooks/useMedia'
import Container from '../../layouts/Container'
import GridContainer from '../../layouts/GridContainer'
import Header from '../../layouts/Header'
import MediaCard from '../../components/MediaCard'

const Home = () => {
  const { media } = useMedia()
  return (
    <Container>
      <Header />
      <GridContainer>
        {
          media.movies.slice(0, 6).map(movie => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              image={movie.poster}
              title={movie.title}
            />
          ))
        }
        {
          media.series.slice(0, 6).map(serie => (
            <MediaCard
              key={serie.id}
              id={serie.id}
              image={serie.poster}
              title={serie.title}
              type='serie'
            />
          ))
        }
      </GridContainer>
    </Container>
  )
}

export default Home
