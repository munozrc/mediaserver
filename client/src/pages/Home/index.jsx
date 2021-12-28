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
            media.movies.map(movie => (
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

export default Home
