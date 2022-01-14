import MediaCard from '../../components/MediaCard'
import useMedia from '../../hooks/useMedia'
import Container from '../../layouts/Container'
import GridContainer from '../../layouts/GridContainer'
import Header from '../../layouts/Header'

const Movies = () => {
  const { movies } = useMedia()
  return (
    <Container>
      <Header />
      <GridContainer>
        {
          movies.map(movie => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              image={movie.poster}
              title={movie.title}
            />
          ))
        }
      </GridContainer>
    </Container>
  )
}

export default Movies
